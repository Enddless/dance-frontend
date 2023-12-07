import { LoadingStatus } from "../const/const";

export type StateAuth = {
  authStatus: string;
  isRegistrationLoading: LoadingStatus;
  isConfirmationLoading: LoadingStatus;
  message: string;
  userData: UserCurrentData | null;
  isUserDataLoading: LoadingStatus;
};

export type UserCurrentData = {
  id: number;
  userName: string;
  phoneNumber: number;
  emailUser: string;
  password: string;
  dateOfBirth: null;
  photoUser: string;
  role: string;
  code: number;
};

export type AuthData = {
  emailUser: string;
  password: string;
};
export type AuthWithCodeData = {
  emailUser: string;
  password: string;
  code: number;
};


export type ReturnData = string;