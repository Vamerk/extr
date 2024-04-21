export interface IRegisterStudent {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  passwordRepeat: string;
  group_id: number;
}

export interface IRegisterDelegate extends Omit<IRegisterStudent, "group_id"> {}

export type TResponse = {
  data: IToken;
};

export interface IToken {
  id: number;
  access_token: string;
  access_token_expired_at: Date;
  refresh_token: string;
  refresh_token_expired_at: Date;
  user_id: number;
}

export interface ILogin {
  email: string;
  password: string;
}
