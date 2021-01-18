import {Component, OnInit} from '@angular/core';
import {AppStateService} from '../../../shared/services/app-state.service';
import {ICognitoUser} from '../../../shared/interfaces/users.interface';
import {Observable} from 'rxjs';
import {IAppState} from '../../../shared/interfaces/state.interface';

@Component({
  selector: 'app-user-apps-dialog',
  templateUrl: './user-apps-dialog.component.html'
})
export class UserAppsDialogComponent implements OnInit {
  store$!: Observable<IAppState>;

  constructor(
    private readonly appStateService: AppStateService
  ) {
  }

  user!: ICognitoUser;

  ngOnInit(): void {
    // this.store$ = this.appStateService.appStore;
    // this.store$.subscribe(data => {
    //   console.log(data);
    // });
  }
}
