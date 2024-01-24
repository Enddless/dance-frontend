export enum NameSpace {
  User = "user",
  Auth = "auth",
  Admin = "admin",
  Ticket = "ticket",
  Studio = "studio",
  MainPage = "main",
}
export const enum LoadingStatus {
  Idle = "idle",
  Pending = "pending",
  Fulfilled = "fulfilled",
  Rejected = "rejected",
}
export const enum AuthorizationStatus {
  Auth = "AUTH",
  NoAuth = "NO_AUTH",
  Unknown = "UNKNOWN",
}

export const AUTH_TOKEN_NAME = "justToken";
export const AUTH_REFRESH_TOKEN_NAME = "session";

export const menuAreaPersonal = [
  { id: 1, title: "Основные настройки", path: "settings" },
  { id: 2, title: "Абонементы", path: "tickets" },
  { id: 3, title: "Уведомления", path: "notifications" },
  { id: 4, title: "Записи", path: "record" },
  { id: 5, title: "Смена пароля", path: "changepass" },
  { id: 6, title: "Написать отзыв", path: "review" },
];
export const DEFAULT_BUTTON_AREA_PERSONAL = {
  id: 1,
  title: "Основные настройки",
  path: "settings",
};

export const menuAreaAdministrator = [
  { id: 1, title: "О студии", path: "about" },
  { id: 2, title: "Новости и акции", path: "news" },
  { id: 3, title: "Наши залы", path: "halls" },
  { id: 4, title: "Персонал", path: "personal" },
  { id: 5, title: "Юридическая информация", path: "information" },
  { id: 6, title: "Услуги и цены", path: "price" },
  { id: 7, title: "Расписание", path: "dashboard" },
  { id: 8, title: "Отзывы", path: "reviews" },
  { id: 9, title: "Контакты", path: "contacts" },
  { id: 10, title: "Управление пользователями", path: "control-users" },
  { id: 11, title: "Настройки", path: "settings" },
];
export const DEFAULT_BUTTON_AREA_ADMIN = {
  id: 1,
  title: "О студии",
  path: "about",
};



export enum halls {
  First = "Зал 1",
  Secondary = "Зал 2",
  Third = "Зал 3",
}
export const ResourceHalls = [
  { id: "a", title: "Зал 1" },
  { id: "b", title: "Зал 2" },
  { id: "c", title: "Зал 3" },
];

export const formName = [
  { id: 1, path: "login" },
  { id: 2, path: "registration" },
  { id: 3, path: "recovery" },
];