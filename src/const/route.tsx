export enum AppRoute {
  Root = "/",
  Modal = "/modal",
  Login = "/login",
  Registration = "/registration",
  Recovery = "/recovery",
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
  // Logotype = "/studioSettingsLogo",
  AddHallPhoto = "/hallsSettingsPhoto",
  AddTeacherPhoto = "/teacherSettingsPhoto",
  Halls = "/hallsSettings",
  Teachers = "/teachersSettings",
  Price = "/ServicePrice",
  AddPrice = "/addServicePrice",
  //main page
  MainPage = "/page",
}
