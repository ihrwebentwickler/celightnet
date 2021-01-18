// angular imports
import {GridsterModule} from 'angular-gridster2';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

/* AWS Amplify */
import Amplify from 'aws-amplify';
import {AmplifyUIAngularModule} from '@aws-amplify/ui-angular';
// @ts-ignore
import awsmobile from '../aws-exports.js';

Amplify.configure(awsmobile);

// own imports
import {AppComponent} from './core/components/app.component';
import {AppRoutingModule} from './app-routing.module';
import {AppStateService} from './shared/services/app-state.service';
import {AuthGuardService} from './shared/services/auth-guard.service';
import {AuthService} from './shared/services/auth.service';
import {LoginComponent} from './features/login/pages/login.component';
import {MaterialModule} from './material.module';
import {MobxAngularModule } from 'mobx-angular';
import {UserAppsDialogComponent} from './features/user-apps/pages/user-apps-dialog.component';
import {UserInfoDialogComponent} from './features/user-info/pages/user-info-dialog.component';
import {WidgetsModule} from './widgets/widgets.module';
import {WorkspaceService} from './features/workspace/services/workspace.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserAppsDialogComponent,
    UserInfoDialogComponent
  ],
  imports: [
    AmplifyUIAngularModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    GridsterModule,
    MaterialModule,
    MobxAngularModule,
    ReactiveFormsModule,
    WidgetsModule
  ],
  providers: [
    AppStateService,
    AuthGuardService,
    AuthService,
    WorkspaceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
