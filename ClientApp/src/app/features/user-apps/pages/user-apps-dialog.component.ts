import {Component, OnInit} from '@angular/core';
import * as _ from 'lodash';
import {AppState} from '../../../shared/models/app-state';
import {APIService, GetCelightCmsUserQuery} from '../../../shared/services/API.service';
import {AppStateService} from '../../../shared/services/app-state.service';
import {IWidget} from '../../../shared/interfaces/widgets.interface';
import {UserAppDialogService} from './services/user-app-dialog.service';

@Component({
  selector: 'app-user-apps-dialog',
  templateUrl: './user-apps-dialog.component.html'
})
export class UserAppsDialogComponent implements OnInit {
  constructor(
    private readonly apiService: APIService,
    private readonly appStateService: AppStateService,
    private readonly userAppDialogService: UserAppDialogService
  ) {
  }

  store!: AppState;

  ngOnInit(): void {
    this.store = this.appStateService.currentAppState;
    if (this.store.appStateData.widgets && this.store.appStateData.appUser) {
      this.store.appStateData.widgets = this.userAppDialogService.setInitialWidgets(
        this.store.appStateData.widgets,
        this.store.appStateData.appUser.widgetKeys
      );
    }
  }

  onClickSaveCurrentWidgetSelection(): void {
    if (
      this.store.appStateData.widgets
      && this.store.appStateData.appUser
      && this.store.appStateData.appUser.widgetKeys
    ) {
      const user: GetCelightCmsUserQuery = _.cloneDeep(this.store.appStateData.appUser);
      const activeWidgets: string[] = [];

      this.store.appStateData.widgets.forEach((widget: IWidget) => {
        if (widget.isChecked) {
          activeWidgets.push(widget.label);
        }
      });

      user.widgetKeys = activeWidgets;

      this.apiService.UpdateCelightCmsUser({
        idUser: user.idUser,
        firstName: user.firstName,
        lastName: user.lastName,
        widgetKeys: activeWidgets
      }).then(() => {
        this.appStateService.updateAppUserState(user);
        this.appStateService.emitDataChangeAction({action: 'new-init-of-widgets'});
      });
    }
  }

  onClickAbortWidgetSelection(): void {
    this.store.appStateData.widgets.filter((widget: IWidget) => {
      widget.isChecked = true;
    });
  }
}
