import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from './auth.service';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {
  }

  canActivate(): Observable<boolean> {
    return this.authService.isAuthenticated()
      .pipe(
        tap((loggedIn: boolean) => {
          if (!loggedIn) {
            this.router.navigate(['/login']).then(() => {
              return false;
            });
          }
        })
      );
  }
}
