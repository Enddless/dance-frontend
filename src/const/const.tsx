export enum NameSpace {
  User = "user",
  Auth = "auth",
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

export const AUTH_TOKEN_NAME = "token";

export const menuAreaPersonal = [
  { id: 1, title: "Основные настройки", path: "settings" },
  { id: 2, title: "Мои абонементы", path: "tickets" },
  { id: 3, title: "Уведомления", path: "notifications" },
  { id: 4, title: "История посещений", path: "history" },
  { id: 5, title: "Онлайн запись", path: "online-record" },
  { id: 6, title: "Смена пароля", path: "change-pass" },
  { id: 7, title: "Написать отзыв", path: "review" },
];
export const DEFAULT_BUTTON_AREA_PERSONAL = { id: 1, title: "Основные настройки", path: "primary-settings" };

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
export const DEFAULT_BUTTON_AREA_ADMIN =   { id: 1, title: "О студии", path: "about" };
