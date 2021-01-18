import {Component, OnInit} from '@angular/core';
import {AppStateService} from '../../../../shared/services/app-state.service';
import {AuthService} from '../../../../shared/services/auth.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {UserAppsDialogComponent} from '../../../../features/user-apps/pages/user-apps-dialog.component';
import {UserInfoDialogComponent} from '../../../../features/user-info/pages/user-info-dialog.component';
import {AppState} from '../../../../shared/models/app-state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  store!: AppState;

  constructor(
    private readonly appStateService: AppStateService,
    private readonly authService: AuthService,
    private readonly matDialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.store = this.appStateService.currentAppState;
  }

  onClickLogout(): void {
    this.authService.signOut();
  }

  onClickShowUserInfo(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '40%';
    dialogConfig.height = '50vh';
    this.matDialog.open(UserInfoDialogComponent, dialogConfig);
  }

  onClickManageWidgets(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '40%';
    dialogConfig.height = '50vh';
    this.matDialog.open(UserAppsDialogComponent, dialogConfig);
  }
}
