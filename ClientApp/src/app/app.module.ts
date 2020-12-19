// angular imports
import {GridsterModule} from 'angular-gridster2';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';

// own imports
import {AppComponent} from './core/components/app.component';
import {AppRoutingModule} from './app-routing.module';
import {DynamicModule} from 'ng-dynamic-component';
import {HeaderComponent} from './core/home/components/header/header.component';
import {MaterialModule} from './material.module';
import {UserInfoDialogComponent} from './features/user-info/pages/user-info-dialog.component';
import {WidgetFrameComponent} from './features/widget-frame/pages/widget-frame.component';
import {WidgetItemComponent} from './features/widget-item/pages/widget-item.component';
import {WidgetsModule} from './widgets/widgets.module';
import {WINDOW, windowFactory} from './shared/models/window.token';
import {WorkspaceComponent} from './features/workspace/pages/workspace.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserInfoDialogComponent,
    WidgetFrameComponent,
    WidgetItemComponent,
    WorkspaceComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    DynamicModule,
    GridsterModule,
    MaterialModule,
    WidgetsModule
  ],
  providers: [{provide: WINDOW, useFactory: windowFactory}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
