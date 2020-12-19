import {Injectable} from '@angular/core';
import {IUser} from '../interfaces/users.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor() {
  }

  getUser(): IUser {
    return {
      forname: 'test-forname',
      lastname: 'test-lastname',
      activeWidgets: ['LoremIpsumWidget']
    };
  }

  addWidgetsOfUser(): void {
    // const user: IUser = this.userService.getUser();
    // if (Array.isArray(user)) {
    //   user.forEach(valueWidgetIdentKey => {
    //     if (this.$appStoreData) {
    //       const keyWidgetIdent = this.$appStoreData.widgets.findIndex(item => item.widgetIdentKey === valueWidgetIdentKey);
    //       if (keyWidgetIdent !== -1) {
    //         this.$appStoreData.widgets.push(this.$appStoreData.widgets[keyWidgetIdent]);
    //       }
    //     }
    //   });
    // }

    /*
    const item = this.$appStoreData.widgets.find(x => x.widgetIdentKey === valueWidgetIdentKey);
    if (item) {
      this.$appStoreData.widgets.push(item);
    }
     */
  }
}
