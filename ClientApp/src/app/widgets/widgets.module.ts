// angular imports
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';

// own system-imports
import {CELIGHTCMS_WIDGET_REGISTRY} from '../shared/interfaces/widgets.interface';
import {MaterialModule} from '../material.module';
import {Widgets} from './widgets';

// widget-imports
import {AwsDataExampleComponent} from './aws-data-example/aws-data-example.component';
import {SwapiExampleComponent} from './swapi-example/swapi-example.component';
import {LoremIpsumWidgetComponent} from './lorem-ipsum/lorem-ipsum.component';

@NgModule({
  declarations: [
    AwsDataExampleComponent,
    SwapiExampleComponent,
    LoremIpsumWidgetComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    {
      provide: CELIGHTCMS_WIDGET_REGISTRY,
      useValue: new Widgets()
        .registerWidget(LoremIpsumWidgetComponent)
        .withTitle('Title Lorem ipsum')
        .withDescription('without function, as a demo for a simple widget')
        .registerWidget(SwapiExampleComponent)
        .withTitle('Title Star-Wars-List')
        .withDescription('A sample-widget with get-request')
        .registerWidget(AwsDataExampleComponent)
        .withTitle('Title User-List')
        .withDescription('Get Example-Data from AWS')
    }]
})
export class WidgetsModule {
}
