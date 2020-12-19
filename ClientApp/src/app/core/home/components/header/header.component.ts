import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {UserInfoDialogComponent} from '../../../../features/user-info/pages/user-info-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  constructor(
    private matDialog: MatDialog
  ) {
  }

  onClickLogout(): void {

  }

  onClickShowUserInfo(): void {
    this.matDialog.open(UserInfoDialogComponent);
  }
}
