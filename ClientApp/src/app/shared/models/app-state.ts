import {IAppState} from '../interfaces/state.interface';

export class AppState {
  appStateData!: IAppState;

  constructor() {
    this.appStateData = {
      cognitoUser: null,
      appUser: null,
      widgets: []
    };
  }
}
