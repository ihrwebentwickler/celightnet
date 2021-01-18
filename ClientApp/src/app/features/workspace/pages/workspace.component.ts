import * as _ from 'lodash';
import {ChangeDetectionStrategy, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {APIService, GetCelightCmsUserQuery} from '../../../shared/services/API.service';
import {AppState} from '../../../shared/models/app-state';
import {AppStateService} from '../../../shared/services/app-state.service';
import {CELIGHTCMS_WIDGET_REGISTRY, IWidget} from '../../../shared/interfaces/widgets.interface';
import {catchError, switchMap} from 'rxjs/operators';
import {CompactType, DisplayGrid, GridsterComponent, GridsterConfig, GridType} from 'angular-gridster2';
import {fromPromise} from 'rxjs/internal-compatibility';
import {Observable, of} from 'rxjs';
import {SafeStyle} from '@angular/platform-browser';
import {Widgets} from '../../../widgets/widgets';
import {WorkspaceService} from '../services/workspace.service';

@Component({
  selector: 'app-workspace',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './workspace.component.html'
})
export class WorkspaceComponent implements OnInit {
  widgetsData!: IWidget[];
  widgetsDataClone$: Observable<IWidget[]> | Observable<[]> = of([]);
  store!: AppState;
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
    private readonly apiService: APIService,
    private readonly appStateService: AppStateService,
    @Inject(CELIGHTCMS_WIDGET_REGISTRY) private widgets: Widgets,
    private readonly workspaceService: WorkspaceService
  ) {
  }

  get backgroundImage(): SafeStyle {
    // add, for example, a customizable selection of background images
    return 'default.png';
  }

  ngOnInit(): void {
    this.widgetsData = this.widgets.getWidgetsData();

    this.store = this.appStateService.currentAppState;
    if (!this.store.appStateData.appUser && this.store.appStateData.cognitoUser) {
      this.widgetsDataClone$ =
        fromPromise(this.apiService.GetCelightCmsUser(this.store.appStateData.cognitoUser.attributes.sub))
          .pipe(
            switchMap((dataAppUser: GetCelightCmsUserQuery) => {
              let widgetNew: IWidget[] = [];
              if (dataAppUser && dataAppUser.widgetKeys) {
                this.store.appStateData.appUser = dataAppUser;
                if (this.store.appStateData.appUser.widgetKeys) {
                  widgetNew = this.workspaceService.removeNonUserWidgets(
                    this.widgetsData,
                    this.store.appStateData.appUser.widgetKeys
                  );
                }
              }
              widgetNew = this.workspaceService.calculateWidgetPosition(widgetNew);
              return of(_.cloneDeep(widgetNew));
            }),
            catchError((err: string) => {
              console.log(err);
              return of([]);
            })
          );
    }

    if (this.store.appStateData.appUser && this.store.appStateData.cognitoUser) {
      let widgetNew: IWidget[];
      widgetNew = this.workspaceService.removeNonUserWidgets(
        this.widgetsData,
        this.store.appStateData.appUser.widgetKeys
      );
      this.widgetsDataClone$ = of(_.cloneDeep(widgetNew));
    }
  }
}
