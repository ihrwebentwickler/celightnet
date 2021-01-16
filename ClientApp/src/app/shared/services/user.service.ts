import {Injectable} from '@angular/core';
import {Auth} from 'aws-amplify';
import {CognitoUser} from '@aws-amplify/auth';
import {IUser} from '../interfaces/users.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(
  ) {
  }

  getUser(): IUser {
    return {
      forname: 'test-forname',
      lastname: 'test-lastname',
      activeWidgets: ['LoremIpsumWidget']
    };
  }

  async getAwsUserName(): Promise<string> {
    return await Auth.currentUserInfo().then(user => {
      return user.username ? user.username : null;
    });
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

  signOut(): Promise<void> {
    return Auth.signOut();
  }

  signIn(username: string, password: string): Promise<CognitoUser | { code: string }> {
    return Auth.signIn(username, password);
  }
}
