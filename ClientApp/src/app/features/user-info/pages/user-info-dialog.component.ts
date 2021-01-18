import {Component, OnInit} from '@angular/core';
import {AppState} from '../../../shared/models/app-state';
import {AppStateService} from '../../../shared/services/app-state.service';

@Component({
  selector: 'app-user-info-dialog',
  templateUrl: './user-info-dialog.component.html'
})
export class UserInfoDialogComponent implements OnInit {
  store!: AppState;

  constructor(
    private readonly appStateService: AppStateService
  ) {
  }

  ngOnInit(): void {
    this.store = this.appStateService.currentAppState;
  }
}
