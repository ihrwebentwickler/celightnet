import {Injectable} from '@angular/core';
import {Auth} from 'aws-amplify';
import {Observable, of} from 'rxjs';
import {fromPromise} from 'rxjs/internal-compatibility';
import {ICognitoUser} from '../interfaces/users.interface';
import {map, catchError, tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {

  constructor(
    private router: Router
  ) {
  }

  /** signin */
  public signIn(username: string, password: string): Observable<ICognitoUser> {
    return fromPromise(Auth.signIn(username, password));
  }

  /** get authenticate state */
  public isAuthenticated(): Observable<boolean> {
    return fromPromise(Auth.currentAuthenticatedUser())
      .pipe(
        map(() => {
          return true;
        }),
        catchError(() => {
          return of(false);
        })
      );
  }

  /** signout */
  public signOut(): void {
    fromPromise(Auth.signOut())
      .subscribe(
        () => {
          this.router.navigate(['/login']).then(r => {
            return true;
          });
        },
        error => console.log(error)
      );
  }
}
