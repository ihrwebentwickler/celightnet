import {ICognitoUser} from './users.interface';
import {ListCelightCmsAppsQuery} from '../services/API.service';

export interface IAppState {
  user: ICognitoUser;
  widgets: ListCelightCmsAppsQuery;
}
