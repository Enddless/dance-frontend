import {
  IPagesFooter,
  IPagesHeader,
  IPricesInfo,
  IReviewsInfo,
  IHallUrl,
  IBannerUrl,
  IStaffInfo,
  IDashboardInfo
} from "../interfaces/interfaces";
import banner from "../assets/lead-banner.png";
import hallOne from "../assets/images/hall-one.png";
import hallTwo from "../assets/images/hall-two.png";
import hallThree from "../assets/images/hall-three.png";
import person from "../assets/images/person-one.png";

export const bannerUrl: IBannerUrl[] = [
  {
    id: 1,
    url: `${banner}`,
  },
  {
    id: 2,
    url: `${banner}`,
  },
  {
    id: 3,
    url: `${banner}`,
  },
  {
    id: 4,
    url: `${banner}`,
  },
  {
    id: 5,
    url: `${banner}`,
  },
  {
    id: 6,
    url: `${banner}`,
  },
  {
    id: 7,
    url: `${banner}`,
  },
];
export const hallUrl: IHallUrl[] = [
  {
    id: 1,
    url: `${hallOne}`,
    title: "Зал 1",
  },
  {
    id: 2,
    url: `${hallTwo}`,
    title: "Зал 2",
  },
  {
    id: 3,
    url: `${hallThree}`,
    title: "Зал 3",
  },
];

export const StaffInfo: IStaffInfo[] = [
  {
    name: "Имя Фамилия",
    img: `${person}`,
    id: 1,
    description:
      "Lorem ipsum dolor sit amet consectetur. Urna cras nibh nullam ornare facilisis euismod massa venenatis vel.",
  },
  {
    name: "Имя Фамилия",
    img: `${person}`,
    id: 2,
    description:
      "Lorem ipsum dolor sit amet consectetur. Urna cras nibh nullam ornare facilisis euismod massa venenatis vel.",
  },
  {
    name: "Имя Фамилия",
    img: `${person}`,
    id: 3,
    description:
      "Lorem ipsum dolor sit amet consectetur. Urna cras nibh nullam ornare facilisis euismod massa venenatis vel.",
  },
  {
    name: "Имя Фамилия",
    img: `${person}`,
    id: 4,
    description:
      "Lorem ipsum dolor sit amet consectetur. Urna cras nibh nullam ornare facilisis euismod massa venenatis vel.",
  },
  {
    name: "Имя Фамилия",
    img: `${person}`,
    id: 5,
    description:
      "Lorem ipsum dolor sit amet consectetur. Urna cras nibh nullam ornare facilisis euismod massa venenatis vel.",
  },
  {
    name: "Имя Фамилия",
    img: `${person}`,
    id: 6,
    description:
      "Lorem ipsum dolor sit amet consectetur. Urna cras nibh nullam ornare facilisis euismod massa venenatis vel.",
  },
  {
    name: "Имя Фамилия",
    img: `${person}`,
    id: 7,
    description:
      "Lorem ipsum dolor sit amet consectetur. Urna cras nibh nullam ornare facilisis euismod massa venenatis vel.",
  },
  {
    name: "Имя Фамилия",
    img: `${person}`,
    id: 8,
    description:
      "Lorem ipsum dolor sit amet consectetur. Urna cras nibh nullam ornare facilisis euismod massa venenatis vel.",
  },
];

export const pagesFooterColumn1: IPagesFooter[] = [
  {
    id: 1,
    data: {
      title: "О студии",
      url: "/",
    },
  },
  {
    id: 2,
    data: {
      title: "Новости",
      url: "/news",
    },
  },
  {
    id: 3,
    data: {
      title: "Акции",
      url: "/actions",
    },
  },
  {
    id: 4,
    data: {
      title: "Наши залы",
      url: "/areas",
    },
  },
  {
    id: 5,
    data: {
      title: "Отзывы",
      url: "/reviews",
    },
  },
  {
    id: 6,
    data: {
      title: "Наши достижения",
      url: "/achievements",
    },
  },
];
export const pagesFooterColumn2: IPagesFooter[] = [
  {
    id: 1,
    data: {
      title: "Правила поведения",
      url: "/rules",
    },
  },
  {
    id: 2,
    data: {
      title: "Услуги и цены",
    url: "/#pricesBlock",
    },
  },
  
  {
    id: 3,
    data: {
      title: "Расписание",
    url: "/dashboard",
    },
  },
  {
    id: 4,
    data: {
      title: "Отзывы",
    url: "/#reviewsBlock",
    },
  },
  {
    id: 5,
    data: {
      title: "Контакты",
    url: "/#contactsBlock",
    },
  },
  {
    id: 6,
    data: {
      title: "Полезная информация",
      url: "/info",
    },
  },
];


export const pagesHeader: IPagesHeader[] = [
  {
    id: 1,
    title: "О студии",
    url: "/",
  },
  {
    id: 2,
    title: "Услуги и цены",
    url: "/#pricesBlock",
  },
  {
    id: 3,
    title: "Расписание",
    url: "/dashboard",
  },
  {
    id: 4,
    title: "Отзывы",
    url: "/#reviewsBlock",
  },
  {
    id: 5,
    title: "Контакты",
    url: "/#contactsBlock",
  },
  {
    id: 6,
    title: "Скачать приложение",
    url: "/download",
  }
];

export const pricesInfo: IPricesInfo[] = [
  {
    id: 1,
    title: "Абонемент 1",
    data: [
      "Абонемент на любые 20 групповых либо детских занятий", 
      "Срок действия 90 дней (3 месяца)",
      "Только в ноябре",
    ],
    price:1000,
  },
  {
    id: 2,
    title: "Абонемент 2",
    data: [
      "Разовое посещение любой групповой программы", 
      "Срок действия 90 дней (3 месяца)",
      "В любой день",
    ],
    price:1000,
  },
  {
    id: 3,
    title: "Абонемент 3",
    data: [
      "Абонемент на любые 10 групповых либо детских занятий", 
      "Срок действия 90 дней (3 месяца)",
      "Только в ноябре",
    ],
    price:1000,
  },
  {
    id: 4,
    title: "Абонемент 4",
    data: [
      "Абонемент на любые 50 групповых занятий.", 
      " Срок действия 180 дней (6 месяцев)",
      "В любой день",
    ],
    price:10000,
  },
];


export const reviewsInfo: IReviewsInfo[] = [
  {
    id: 1,
    data: {
      user: "Сергей Иванов",
      stars: 4,
      date: "22.12.2016",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, amet.",
    },
  },
  {
    id: 2,
    data: {
      user: "Сергей Иванов",
      stars: 4,
      date: "22.12.2016",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, amet.",
    },
  },
  {
    id: 3,
    data: {
      user: "Сергей Иванов",
      stars: 4,
      date: "22.12.2016",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, amet.",
    },
  },
  {
    id: 4,
    data: {
      user: "Сергей Иванов",
      stars: 4,
      date: "22.12.2016",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, amet.",
    },
  },
  {
    id: 5,
    data: {
      user: "Сергей Иванов",
      stars: 4,
      date: "22.12.2016",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, amet.",
    },
  },
];

export const dashboardInfo: IDashboardInfo[] = [
  {
    id: 1,
    title:"Занятие 1",
    time: new Date("2023-11-06T08:00:00"),
    hall:"Зал 1",
    teacher:"Тренер Тренерович"
  },
  {
    id: 2,
    title:"Занятие 1",
    time: new Date("2023-11-07T08:00:00"),
    hall:"Зал 1",
    teacher:"Тренер Тренерович"
  },
  {
    id: 3,
    title:"Занятие 1",
    time: new Date("2023-11-08T08:00:00"),
    hall:"Зал 1",
    teacher:"Тренер Тренерович"
  },
  {
    id: 4,
    title:"Занятие 1",
    time: new Date("2023-11-09T08:00:00"),
    hall:"Зал 1",
    teacher:"Тренер Тренерович"
  },
  {
    id: 5,
    title:"Занятие 1",
    time: new Date("2023-11-10T08:00:00"),
    hall:"Зал 1",
    teacher:"Тренер Тренерович"
  },
  {
    id: 6,
    title:"Занятие 1",
    time: new Date("2023-11-11T08:00:00"),
    hall:"Зал 1",
    teacher:"Тренер Тренерович"
  },
  {
    id: 7,
    title:"Занятие 1",
    time: new Date("2023-11-12T08:00:00"),
    hall:"Зал 1",
    teacher:"Тренер Тренерович"
  },

  {
    id: 8,
    title:"Занятие 2",
    time: new Date("2023-11-06T09:00:00"),
    hall:"Зал 2",
    teacher:"Тренер Тренерович"
  },
  {
    id: 9,
    title:"Занятие 2",
    time: new Date("2023-11-07T09:00:00"),
    hall:"Зал 2",
    teacher:"Тренер Тренерович"
  },
  {
    id: 10,
    title:"Занятие 2",
    time: new Date("2023-11-08T09:00:00"),
    hall:"Зал 2",
    teacher:"Тренер Тренерович"
  },
  {
    id: 11,
    title:"Занятие 2",
    time: new Date("2023-11-09T09:00:00"),
    hall:"Зал 2",
    teacher:"Тренер Тренерович"
  },
  {
    id: 12,
    title:"Занятие 2",
    time: new Date("2023-11-10T09:00:00"),
    hall:"Зал 2",
    teacher:"Тренер Тренерович"
  },
  {
    id: 13,
    title:"Занятие 2",
    time: new Date("2023-11-11T09:00:00"),
    hall:"Зал 2",
    teacher:"Тренер Тренерович"
  },
  {
    id: 14,
    title:"Занятие 2",
    time: new Date("2023-11-12T09:00:00"),
    hall:"Зал 2",
    teacher:"Тренер Тренерович"
  },
];
