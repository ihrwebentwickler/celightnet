import {GetCelightCmsUserQuery} from '../services/API.service';
import {ICognitoUser} from './users.interface';

export interface IAppState {
  cognitoUser: ICognitoUser | null;
  appUser: GetCelightCmsUserQuery | null;
}
