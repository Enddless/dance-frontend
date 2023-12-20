import { LoadingStatus } from "../const/const";

export type StateAuth = {
  authStatus: string;
  isRegistrationLoading: LoadingStatus;
  isConfirmationLoading: LoadingStatus;
  message: string;
  userData: UserCurrentData;
  userRole: UserCurrentRole | null;
  isUserDataLoading: LoadingStatus;
  isUserRoleLoading:LoadingStatus;
  buttonActive: string;
};

export type UserCurrentData = {
  id?: number;
  userName?: string | undefined;
  phoneNumber?: number | undefined;
  emailUser?: string | undefined;
  password?: string | undefined;
  dateOfBirth?: Date | undefined;
  photoUser?: string | undefined;
  genders?:string | undefined;
  role?: string;
  code?: number;
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