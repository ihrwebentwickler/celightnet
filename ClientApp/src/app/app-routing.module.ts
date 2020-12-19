import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WorkspaceComponent} from './features/workspace/pages/workspace.component';

const routes: Routes = [
  {path: '', redirectTo: 'ws', pathMatch: 'full'},
  {path: 'ws', component: WorkspaceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
