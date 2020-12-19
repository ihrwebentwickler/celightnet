import {ChangeDetectionStrategy, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {CELIGHTCMS_WIDGET_REGISTRY, IStoreData} from '../../../shared/interfaces/widgets.interface';
import {CompactType, DisplayGrid, GridsterComponent, GridsterConfig, GridType} from 'angular-gridster2';
import {SafeStyle} from '@angular/platform-browser';
import {Widgets} from '../../../widgets/widgets';


@Component({
  selector: 'app-workspace',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './workspace.component.html'
})
export class WorkspaceComponent implements OnInit {
  storeData?: IStoreData;
  @ViewChild('grid') grid: GridsterComponent | undefined;

  gridOptions: GridsterConfig = {
    gridType: GridType.Fixed,
    compactType: CompactType.None,
    margin: 10,
    outerMargin: true,
    outerMarginTop: null,
    outerMarginRight: null,
    outerMarginBottom: null,
    outerMarginLeft: null,
    useTransformPositioning: true,
    mobileBreakpoint: 640,
    minCols: 1,
    maxCols: 100,
    minRows: 1,
    maxRows: 100,
    maxItemCols: 100,
    minItemCols: 1,
    maxItemRows: 100,
    minItemRows: 1,
    maxItemArea: 2500,
    minItemArea: 1,
    defaultItemCols: 1,
    defaultItemRows: 1,
    fixedColWidth: 105,
    fixedRowHeight: 105,
    keepFixedHeightInMobile: false,
    keepFixedWidthInMobile: false,
    scrollSensitivity: 10,
    scrollSpeed: 20,
    enableEmptyCellClick: false,
    enableEmptyCellContextMenu: false,
    enableEmptyCellDrop: false,
    enableEmptyCellDrag: false,
    enableOccupiedCellDrop: false,
    emptyCellDragMaxCols: 50,
    emptyCellDragMaxRows: 50,
    ignoreMarginInRow: false,
    draggable: {
      enabled: true,
    },
    resizable: {
      enabled: true,
    },
    swap: false,
    pushItems: true,
    disablePushOnDrag: false,
    disablePushOnResize: false,
    pushDirections: {north: true, east: true, south: true, west: true},
    pushResizeItems: false,
    displayGrid: DisplayGrid.Always,
    disableWindowResize: false,
    disableWarnings: false,
    scrollToNewItems: false
  };

  constructor(
    @Inject(CELIGHTCMS_WIDGET_REGISTRY) private widgets: Widgets,
  ) {
  }

  get backgroundImage(): SafeStyle {
    // add, for example, a customizable selection of background images
    return 'default.png';
  }

  ngOnInit(): void {
    this.storeData = this.widgets.getStoreData();
  }
}
