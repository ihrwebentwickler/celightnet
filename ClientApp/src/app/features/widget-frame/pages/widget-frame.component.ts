import {Component, Input} from '@angular/core';
import {IWidget} from '../../../shared/interfaces/widgets.interface';

@Component({
  selector: 'app-widget-frame',
  templateUrl: './widget-frame.component.html'
})
export class WidgetFrameComponent {
  @Input() widget?: IWidget;

  constructor() {
  }
}
