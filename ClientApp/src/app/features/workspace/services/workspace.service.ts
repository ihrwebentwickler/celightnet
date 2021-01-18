import {Injectable} from '@angular/core';
import {IWidget, IWidgetDimension, IWidgetPosition} from '../../../shared/interfaces/widgets.interface';

@Injectable()
export class WorkspaceService {
  widgetDimension: IWidgetDimension;

  constructor() {
    this.widgetDimension = {
      unitWidth: 5,
      unitHeight: 5,
      numberInRow: 3
    };
  }

  public removeNonUserWidgets(widgetsData: IWidget[], activeStoreWidgets: (string | null)[]): IWidget[] {
    const widgetsDataNew: IWidget[] = [];
    if (Array.isArray(widgetsData)) {
      widgetsData.filter(widget => {
        if (activeStoreWidgets.indexOf(widget.widgetIdentKey) !== -1) {
          widgetsDataNew.push(widget);
        }
      });
    }

    return widgetsDataNew;
  }

  public calculateWidgetPosition(widgetsData: IWidget[]): IWidget[] {
    if (Array.isArray(widgetsData)) {
      const widgetPosition: IWidgetPosition = {
        counterXPos: 0,
        counterRunner: 0,
        currentXPos: 0,
        currentYPos: 0
      };

      widgetsData.forEach(widget => {
        widgetPosition.counterXPos++;
        widgetPosition.counterRunner++;

        widgetPosition.counterXPos = widgetPosition.counterXPos <= this.widgetDimension.numberInRow ?
          widgetPosition.counterXPos : 1;

        widgetPosition.currentXPos = widgetPosition.counterXPos === 1 ?
          0 : (widgetPosition.counterXPos - 1) * (this.widgetDimension.unitWidth);
        widgetPosition.currentYPos =
          widgetPosition.counterXPos === 1 && widgetPosition.counterRunner > this.widgetDimension.numberInRow ?
            widgetPosition.currentYPos + this.widgetDimension.numberInRow : widgetPosition.currentYPos;

        widget.cols = this.widgetDimension.unitWidth;
        widget.rows = this.widgetDimension.unitHeight;
        widget.x = widgetPosition.currentXPos;
        widget.y = widgetPosition.currentYPos;
      });
    }

    return widgetsData;
  }
}
