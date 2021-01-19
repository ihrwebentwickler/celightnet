import {Injectable} from '@angular/core';
import {IWidget} from '../../../../shared/interfaces/widgets.interface';

@Injectable()
export class UserAppDialogService {
  constructor() {
  }

  setInitialWidgets(widgets: IWidget[], userWidgetKeys: (string | null)[]): IWidget[] {
    if (Array.isArray(widgets) && userWidgetKeys) {
      widgets.filter((widget: IWidget) => {
        widget.isChecked = userWidgetKeys.indexOf(widget.label) !== -1;
      });
    }

    return widgets;
  }
}
