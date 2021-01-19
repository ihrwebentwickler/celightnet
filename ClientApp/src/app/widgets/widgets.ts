import {Injectable, Type} from '@angular/core';
import {IWidget} from '../shared/interfaces/widgets.interface';

@Injectable()
export class Widgets {
  private readonly widgets: IWidget[];

  constructor() {
    this.widgets = [];
  }

  public registerWidget(widgetComponent: Type<any>): Widgets {
    const labelItem = widgetComponent.name.toLowerCase().indexOf('component') !== 0 ?
      widgetComponent.name.toLowerCase().split('component')[0] : widgetComponent.name;
    if (this.widgets.findIndex(item => item.widgetIdentKey === labelItem) === -1) {
      this.widgets.push({
        cols: 0,
        rows: 0,
        x: 0,
        y: 0,
        hasContent: true,
        dragEnabled: true,
        resizeEnabled: true,
        label: labelItem,
        widgetIdentKey: labelItem,
        component: widgetComponent,
        componentName: widgetComponent.name,
        disableScrollHorizontal: true,
        isChecked: true
      });
    }

    return this;
  }

  public withTitle(title: string = ''): Widgets {
    if (Array.isArray(this.widgets) && this.widgets.length > 0) {
      this.widgets[this.widgets.length - 1].title = title;
    }

    return this;
  }

  public withDescription(description: string = ''): Widgets {
    if (Array.isArray(this.widgets) && this.widgets.length > 0) {
      this.widgets[this.widgets.length - 1].description = description;
    }

    return this;
  }

  public getWidgetsData(): IWidget[] {
    return this.widgets;
  }
}
