import { LoadingStatus } from "../const/const";

export type StateAuth = {
  authStatus: string;
  isRegistrationLoading: LoadingStatus;
  isConfirmationLoading: LoadingStatus;
  message: string;
  userData: UserCurrentData;
  userRole: UserCurrentRole | null;
  isUserDataLoading: LoadingStatus;
  isUserRoleLoading: LoadingStatus;
  isUserPhotoLoading: LoadingStatus;
  buttonActive: string;
};

export type UserCurrentData = {
  id?: number;
  userName?: string | undefined;
  phoneNumber?: number | undefined;
  emailUser?: string | undefined;
  password?: string | undefined;
  dateOfBirth?: Date | string;
  photoUser?: string | undefined;
  genders?: string | undefined;
  role?: string;
  code?: number;
};

export type UserCurrentRole = {
  id: number;
  role: string;
};
// export type UserCurrentPhoto = {
//   photoUser: string;
// };
export type UserCurrentPhoto = {
  photoUser: File;
};
export type Banner = {
  PhotoBanner: File;
};

export type StateStudio = {
  message: string;
  isStudioDataLoading: LoadingStatus;
  isBannerLoading: LoadingStatus;
  isHallsLoading: LoadingStatus;
  isTeachersLoading: LoadingStatus;
  aboutStudioData: AboutStudioData | null;
  bannersData: BannersData[] | null;
  hallsData: HallData[] | null;
  currentHallData: HallData | null;
  techersData: TeacherData[] | null;
  currentTeacherData: TeacherData | null;
};
export type AboutStudioData = {
  idAtelier?: number;
  photoLogo: string;
  description: string;
};
export type HallData = {
  IdHall: number;
  PhotoHall?: string;
  Title: string;
  Description: string;
};

export type PhotoHall = {
  PhotoHall: File;
};

export type BannersData = {
  IdBanner: number;
  PhotoBanner?: string;
};
export type CurrentBannerId = {
  IdBanner: number;
};
export type CurrentHallId = {
  IdHall: number;
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

export type MainPageData = {
  Banners: BannersData[];
  Atelie: AboutStudioData;
  Halls: HallData[];
  Teachers: TeacherData[];
};
export type MainPageState = {
  isMainPageDataLoading: LoadingStatus;
  mainPage: MainPageData | null;
};
export type TeacherData = {
  idTeachers: number;
  photoTeachers?: string;
  teachersName: string;
  description: string;
};
export type PhotoTeacher = {
  photoTeachers: File;
};
export type CurrentTeacherId = {
  idTeachers: number;
};

export type Logotype = {
  photoLogo: File;
};