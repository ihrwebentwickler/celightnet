import {Component, OnInit} from '@angular/core';
import {AppStateService} from '../../../../shared/services/app-state.service';
import {AuthService} from '../../../../shared/services/auth.service';
import {IAppState} from '../../../../shared/interfaces/state.interface';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {UserAppsDialogComponent} from '../../../../features/user-apps/pages/user-apps-dialog.component';
import {UserInfoDialogComponent} from '../../../../features/user-info/pages/user-info-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  store$!: Observable<IAppState>;

  constructor(
    private readonly appStateService: AppStateService,
    private readonly matDialog: MatDialog,
    private readonly router: Router,
    private readonly authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.store$ = this.appStateService.appStore;
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
