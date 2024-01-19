export enum AppRoute {
  Root = "/",
  Login = "/login",
  Registration = "/login/registration",
  Recovery = "/login/recovery",
  Dashboard = "/dashboard",
  Reviews = "/reviews",
  PersonalArea = "/inbox",
  AdministratorArea = "/administration",
  NotFound = "/*",
}


export enum APIRoute {
  //auth
  Registration = "/registration",
  Confirmation = "/confirmation",
  Login = '/login',
  Logout = '/logOutOfAccount',
  //user
  Role = '/accessAccount',
  UserData = '/basicSettings',
  DeleteUser = '/deleteLogin',
  //others-data
  UpdateToken = '/loginRefresh',
  Tickets = '/seasonTickets',
  AddPhoto = '/addUsersPhoto',
  //admin-settings
  Banner = "/basicBanners",
  AboutStudio = "/studioSettings",
  AddHallPhoto = "/hallsSettingsPhoto",
  AddTeacherPhoto = "/teacherSettingsPhoto",
  Halls = "/hallsSettings",
  Teachers = "/teachersSettings",
  //main page
  MainPage = "/page",
}
