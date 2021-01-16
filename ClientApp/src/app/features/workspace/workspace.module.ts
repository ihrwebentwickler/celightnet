import {CommonModule} from '@angular/common';
import {DynamicModule} from 'ng-dynamic-component';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {GridsterModule} from 'angular-gridster2';
import {HeaderComponent} from '../../core/home/components/header/header.component';
import {MaterialModule} from '../../material.module';
import {WidgetFrameComponent} from '../widget-frame/pages/widget-frame.component';
import {WidgetItemComponent} from '../widget-item/pages/widget-item.component';
import {WorkspaceComponent} from './pages/workspace.component';

@NgModule({
  declarations: [
    HeaderComponent,
    WidgetFrameComponent,
    WidgetItemComponent,
    WorkspaceComponent
  ],
  imports: [
    CommonModule,
    DynamicModule,
    GridsterModule,
    FormsModule,
    MaterialModule
  ],
})

export class WorkspaceModule {
}
