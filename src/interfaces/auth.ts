import { BaseSlice } from './base';

export interface ILogin {
  phone: string;
}

export interface IRegistration extends ILogin {
  name: string;
  lastName: string;
}

export interface IUser extends IRegistration {
  id: number;
}

export type Code = {
  code: string;
  id: string;
};

export interface AuthSlice extends BaseSlice {
  code: Code | null;
  registrationData: IRegistration | null;
  user: IUser | null;
}
