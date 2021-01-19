import {Injectable} from '@angular/core';
import {action, computed, observable} from 'mobx-angular';
import {AppState} from '../models/app-state';
import {Auth} from 'aws-amplify';
import {BehaviorSubject} from 'rxjs';
import {GetCelightCmsUserQuery} from './API.service';
import {ICognitoUser} from '../interfaces/users.interface';
import {IComponentDataEmit} from '../interfaces/state.interface';
import {IWidget} from '../interfaces/widgets.interface';

@Injectable()
export class AppStateService {
  @observable appState!: AppState;
  dataSource: BehaviorSubject<IComponentDataEmit> = new BehaviorSubject<IComponentDataEmit>({action: null});
  currentData$ = this.dataSource.asObservable();

  constructor() {
    this.appState = new AppState();
    /* TODO: session-user-data is not defined by amplifiy */
    Auth.currentSession().then((sessionUserData: any) => {
      this.appState.appStateData.cognitoUser = {
        attributes: {
          email: sessionUserData.idToken.payload.email,
          email_verified: sessionUserData.idToken.payload.email_verified,
          sub: sessionUserData.idToken.payload.sub
        },
        username: sessionUserData.accessToken.payload.username
      };
    });
  }

  @action updateCognitoUserState(cognitoUser: ICognitoUser): void {
    this.appState.appStateData.cognitoUser = cognitoUser;
  }

  @action updateAppUserState(appUser: GetCelightCmsUserQuery): void {
    this.appState.appStateData.appUser = appUser;
  }

  @action updateWidgetsState(widgets: IWidget[]): void {
    this.appState.appStateData.widgets = widgets;
  }

  @computed get currentAppState(): AppState {
    return this.appState;
  }

  emitDataChangeAction(actionNext: IComponentDataEmit): void {
    this.dataSource.next(actionNext);
  }
}
