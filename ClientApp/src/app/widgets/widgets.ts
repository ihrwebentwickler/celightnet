import {Injectable, Type} from '@angular/core';
import {
  IStoreData,
  IWidget,
  IWidgetDimension,
  IWidgetPosition
} from '../shared/interfaces/widgets.interface';

@Injectable()
export class Widgets {
  private storeData: IStoreData = {
    user: {
      forname: null,
      lastname: null,
      activeWidgets: []
    },
    widgets: []
  };

  widgetDimension: IWidgetDimension;
  widgetPosition: IWidgetPosition;

  private readonly widgets: IWidget[];

  constructor() {
    this.widgets = [];

    this.widgetDimension = {
      unitWidth: 5,
      unitHeight: 5,
      numberInRow: 3
    };

    this.widgetPosition = {
      counterXPos: 0,
      counterRunner: 0,
      currentXPos: 0,
      currentYPos: 0
    };
  }

  private calculateWidgetPosition(): IWidgetPosition {
    this.widgetPosition.counterXPos++;
    this.widgetPosition.counterRunner++;

    this.widgetPosition.counterXPos = this.widgetPosition.counterXPos <= this.widgetDimension.numberInRow ?
      this.widgetPosition.counterXPos : 1;

    this.widgetPosition.currentXPos = this.widgetPosition.counterXPos === 1 ?
      0 : (this.widgetPosition.counterXPos - 1) * (this.widgetDimension.unitWidth);
    this.widgetPosition.currentYPos =
      this.widgetPosition.counterXPos === 1 && this.widgetPosition.counterRunner > this.widgetDimension.numberInRow ?
        this.widgetPosition.currentYPos + this.widgetDimension.numberInRow : this.widgetPosition.currentYPos;

    return this.widgetPosition;
  }

  public registerWidget(widgetComponent: Type<any>): Widgets {
    const labelItem = widgetComponent.name.toLowerCase().indexOf('component') !== 0 ?
      widgetComponent.name.toLowerCase().split('component')[0] : widgetComponent.name;
    if (this.widgets.findIndex(item => item.widgetIdentKey === labelItem) === -1) {
      this.calculateWidgetPosition();

      this.widgets.push({
        cols: this.widgetDimension.unitWidth,
        rows: this.widgetDimension.unitHeight,
        x: this.widgetPosition.currentXPos,
        y: this.widgetPosition.currentYPos,
        hasContent: true,
        dragEnabled: true,
        resizeEnabled: true,
        label: labelItem,
        widgetIdentKey: labelItem,
        component: widgetComponent,
        componentName: widgetComponent.name,
        disableScrollHorizontal: true
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

  public initApp(): Widgets {
    if (Array.isArray(this.widgets) && this.widgets.length > 0) {
      this.storeData.widgets = this.widgets;
    }

    return this;
  }

  public getStoreData(): IStoreData {
    return this.storeData;
  }
}
