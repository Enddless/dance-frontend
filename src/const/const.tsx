import hallOne from "../assets/images/hall-one.png";
import hallTwo from "../assets/images/hall-two.png";
import hallThree from "../assets/images/hall-three.png";
export enum NameSpace {
  User = "user",
  Auth = "auth",
  Admin = "admin"
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
export const AUTH_REFRESH_TOKEN_NAME = "refresh-token";

export const menuAreaPersonal = [
  { id: 1, title: "Основные настройки", path: "settings" },
  { id: 2, title: "Абонементы", path: "tickets" },
  { id: 3, title: "Уведомления", path: "notifications" },
  { id: 4, title: "Записи", path: "record" },
  { id: 5, title: "Смена пароля", path: "change-pass" },
  { id: 6, title: "Написать отзыв", path: "review" },
];
export const DEFAULT_BUTTON_AREA_PERSONAL = {
  id: 1,
  title: "Основные настройки",
  path: "primary-settings",
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

export type THalls = {
  id: number;
  name: string;
  url: string;
  description: string;
};
export const hallsData: THalls[] = [
  {
    id: 1,
    name: "Зал 1",
    url: `${hallOne}`,
    description:
      "Lorem ipsum dolor sit amet consectetur. Urna cras nibh nullam ornare facilisis euismod massa venenatis vel. Tempor ut imperdiet scelerisque dictumst. Pellentesque accumsan adipiscing quis pulvinar fusce pharetra. ",
  },
  {
    id: 2,
    name: "Зал 2",
    url: `${hallTwo}`,
    description:
      "Lorem ipsum dolor sit amet consectetur. Urna cras nibh nullam ornare facilisis euismod massa venenatis vel. Tempor ut imperdiet scelerisque dictumst. Pellentesque accumsan adipiscing quis pulvinar fusce pharetra. ",
  },
  {
    id: 3,
    name: "Зал 3",
    url: `${hallThree}`,
    description:
      "Lorem ipsum dolor sit amet consectetur. Urna cras nibh nullam ornare facilisis euismod massa venenatis vel. Tempor ut imperdiet scelerisque dictumst. Pellentesque accumsan adipiscing quis pulvinar fusce pharetra. ",
  },
];

