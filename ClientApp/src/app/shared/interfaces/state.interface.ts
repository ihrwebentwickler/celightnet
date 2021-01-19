import {GetCelightCmsUserQuery} from '../services/API.service';
import {ICognitoUser} from './users.interface';
import {IWidget} from './widgets.interface';

export interface IAppState {
  cognitoUser: ICognitoUser | null;
  appUser: GetCelightCmsUserQuery | null;
  widgets: IWidget[];
}

export interface IComponentDataEmit {
  action: string | null;
}
