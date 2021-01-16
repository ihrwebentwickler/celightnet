export interface IUser {
  forname: string | null;
  lastname: string | null;
  activeWidgets: string[];
}

export interface ICognitoUser {
  attributes: {
    email: string;
    email_verified: boolean;
    sub: string;
  };
  id?: number;
  username: string;
}
