import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AppStateService} from '../../../shared/services/app-state.service';
import {AuthService} from '../../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent {
  error!: {
    userNotConfirmed: boolean,
    userNotExists: boolean,
  };

  form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(2)]),
    password: new FormControl('', [Validators.required, Validators.minLength(2)]),
  });

  constructor(
    private readonly appStateService: AppStateService,
    private readonly authService: AuthService,
    private readonly router: Router
  ) {
    this.error = {
      userNotConfirmed: false,
      userNotExists: false
    };
  }

  onSubmitForm(): void {
    if (this.form.valid) {
      this.authService.signIn(this.form.value.username, this.form.value.password)
        .subscribe(
          (userData) => {
            this.error = {
              userNotConfirmed: false,
              userNotExists: false
            };

            this.appStateService.updateCognitoUserState({
              attributes: {
                email: userData.attributes.email,
                email_verified: userData.attributes.email_verified,
                sub: userData.attributes.sub
              },
              username: userData.username
            });

            this.router.navigate(['/ws']).then(() => {
              return false;
            });
          },
          error => {
            switch (error.code) {
              case 'NotAuthorizedException':
                this.error = {
                  userNotConfirmed: true,
                  userNotExists: false
                };
                break;
              case 'UserNotFoundException':
                this.error = {
                  userNotConfirmed: false,
                  userNotExists: true
                };
                break;
            }
          });
    }
  }
}
