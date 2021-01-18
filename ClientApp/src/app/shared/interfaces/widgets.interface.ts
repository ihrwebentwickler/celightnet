import {Type} from '@angular/core';

export interface IWidget {
  widgetIdentKey: string;
  componentName: string;
  component: Type<any>;
  cols: number;
  rows: number;
  x: number;
  y: number;
  hasContent: boolean;
  dragEnabled: boolean;
  resizeEnabled: boolean;
  label: string;
  disableScrollHorizontal: boolean;
  title?: string;
  description?: string;
}

export interface IWidgetPosition {
  counterXPos: number;
  counterRunner: number;
  currentXPos: number;
  currentYPos: number;
}

export interface IWidgetDimension {
  unitWidth: number;
  unitHeight: number;
  numberInRow: number;
}

export const CELIGHTCMS_WIDGET_REGISTRY = 'celightcms-widget-registry';
