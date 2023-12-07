export enum AppRoute {
  Root = "/",
  Login = "/login",
  Registration = "/login/registration",
  Recovery = "/login/recovery",
  Dashboard = "/dashboard",
  Reviews = "/reviews",
  PersonalArea = "personal-area",
  AdministratorArea = "administration",
  NotFound = "/*",
}


export enum APIRoute {
  //auth
  Registration = "/registration",
  Confirmation = "/confirmation",
  Login = '/login',
  //user
  Role = '/accessAccount',
}
