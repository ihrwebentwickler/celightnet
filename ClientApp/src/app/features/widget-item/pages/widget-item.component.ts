import {Component, Input, Type} from '@angular/core';
import {IWidget} from '../../../shared/interfaces/widgets.interface';

@Component({
  selector: 'app-widget',
  templateUrl: './widget-item.component.html'
})
export class WidgetItemComponent {
  @Input() widget: IWidget | undefined;
  @Input() component: Type<any> = null as any;
  @Input() description: string | undefined;

  constructor() {
  }
}
