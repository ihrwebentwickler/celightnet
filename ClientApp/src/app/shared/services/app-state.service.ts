import {Injectable} from '@angular/core';
import {Auth} from 'aws-amplify';
import {catchError, map, tap} from 'rxjs/operators';
import {computed, observable} from 'mobx-angular';
import {fromPromise} from 'rxjs/internal-compatibility';
import {IAppState} from '../interfaces/state.interface';
import {of, Observable} from 'rxjs';

import {APIService, ListCelightCmsAppsQuery} from './API.service';

@Injectable()
export class AppStateService {
  @observable appState$!: IAppState;

  constructor(
    private readonly apiService: APIService
  ) {

  }

  @computed setWidgets(): Observable<IAppState> {
    return fromPromise(this.apiService.ListCelightCmsApps())
      .pipe(
        map((data: ListCelightCmsAppsQuery) => {
          this.appState$.widgets = data;
          return this.appState$;
        }));
  }

  @computed setAppStore(): Observable<IAppState> {
    /* TODO: session-data is not defined by amplifiy */
    return fromPromise(Auth.currentSession())
      .pipe(
        tap((data: any) => {
          this.appState$.user = {
            attributes: {
              email: data.idToken.payload.email,
              email_verified: data.idToken.payload.email_verified,
              sub: data.idToken.payload.sub
            },
            username: data.accessToken.payload.username
          };

          console.log(this.appState$);
          return this.setWidgets();
        }),
        catchError(() => {
          return of(this.appState$);
        })
      );
  }

  @computed get appStore(): Observable<IAppState> {
    return of(this.appState$);
  }
}
