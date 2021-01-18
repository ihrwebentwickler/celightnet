import {Injectable} from '@angular/core';
import {action, computed, observable} from 'mobx-angular';
import {Auth} from 'aws-amplify';
import {AppState} from '../models/app-state';
import {IAppState} from '../interfaces/state.interface';

@Injectable()
export class AppStateService {
  @observable appState!: AppState;

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

  @action updateAppState(appStateData: IAppState): void {
    if (appStateData.appUser !== null) {
      this.appState.appStateData.appUser = appStateData.appUser;
    }

    if (appStateData.cognitoUser !== null) {
      this.appState.appStateData.cognitoUser = appStateData.cognitoUser;
    }
  }

  @computed get currentAppState(): AppState {
    return this.appState;
  }
}
