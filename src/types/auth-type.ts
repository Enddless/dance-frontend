import { LoadingStatus } from "../const/const";

export type StateAuth = {
  authStatus: string;
  isRegistrationLoading: LoadingStatus;
  isConfirmationLoading: LoadingStatus;
  message: string;
  userData: UserCurrentData | null;
  userRole: UserCurrentRole | null;
  isUserDataLoading: LoadingStatus;
  isUserRoleLoading:LoadingStatus;
  buttonActive: string;
};

export type UserCurrentData = {
  id: number;
  userName: string;
  phoneNumber: number;
  emailUser: string;
  password: string;
  dateOfBirth: Date ;
  photoUser: string;
  genders:string;
  role: string;
  code: number;
};
export type UserCurrentRole = {
  id: number;
  role: string;
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