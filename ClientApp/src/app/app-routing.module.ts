import {AuthGuardService} from './shared/services/auth-guard.service';
import {LoginComponent} from './features/login/pages/login.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WorkspaceComponent} from './features/workspace/pages/workspace.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'ws',
    component: WorkspaceComponent,
    canActivate: [AuthGuardService],
    loadChildren: () => import('./features/workspace/workspace.module').then(m => m.WorkspaceModule),
  },
  {path: '**', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
