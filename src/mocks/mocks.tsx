import {
  IPagesFooter,
  IPagesHeader,
  IPricesInfo,
  IReviewsInfo,
  IBannerUrl,
  IStaffInfo,
  IDashboardInfo,
  INotification,
  IStudio,
} from "../interfaces/interfaces";
import banner from "../assets/lead-banner.png";
import bannerTwo from "../assets/lead-banner-two.png";
import hallOne from "../assets/images/hall-one.png";
import hallTwo from "../assets/images/hall-two.png";
import hallThree from "../assets/images/hall-three.png";
import person from "../assets/images/person-one.png";
import person2 from "../assets/images/person-two.png";
import person3 from "../assets/images/person-three.png";
import person4 from "../assets/images/person-four.png";
import person5 from "../assets/images/person-five.png";
import person6 from "../assets/images/person-six.png";
import person7 from "../assets/images/person-seven.png";
import person8 from "../assets/images/person-eight.png";

export const bannerUrl: IBannerUrl[] = [
  {
    id: 1,
    url: `${banner}`,
  },
  {
    id: 2,
    url: `${bannerTwo}`,
  },
  {
    id: 3,
    url: `${banner}`,
  },
  {
    id: 4,
    url: `${bannerTwo}`,
  },
  {
    id: 5,
    url: `${banner}`,
  },
  {
    id: 6,
    url: `${bannerTwo}`,
  },
  {
    id: 7,
    url: `${banner}`,
  },
];

export const hallsData: THalls[] = [
  {
    id: 1,
    name: "Зал 1",
    url: `${hallOne}`,
    description:
      "Зал №1 нашей студии представляет собой просторное и светлое помещение, идеально подходящее для проведения занятий по классическому балету. Здесь есть большие зеркала, расположенные по всей стене, которые помогают ученикам контролировать свою позу и технику. Зал оборудован специальными брусьями и штангами, которые помогают развивать силу и гибкость танцоров. Акустическая система обеспечивает качественное звучание музыки, необходимой для выполнения танцевальных комбинаций",
  },
  {
    id: 2,
    name: "Зал 2",
    url: `${hallTwo}`,
    description:
      "Зал №2 является уютным и функциональным пространством для занятий различными стилями танца. Он оснащен пружинным полом, которое помогает смягчить удары и снизить нагрузку на суставы танцоров. Здесь также имеются зеркала, позволяющие контролировать позу и исправлять технику. Зал оборудован звуковой системой, которая позволяет настроить атмосферу и создать подходящее настроение для каждого занятия.",
  },
  {
    id: 3,
    name: "Зал 3",
    url: `${hallThree}`,
    description:
      "Зал №3 представляет собой уникальное пространство, специально предназначенное для проведения групповых занятий по современному танцу. Здесь есть большие окна, которые обеспечивают естественное освещение и приятную атмосферу. Пол выполнен из специального материала, обеспечивающего хорошее сцепление с обувью и позволяющего свободно двигаться. Зал имеет звуковую систему с возможностью подключения музыки, что помогает создать энергичную и вдохновляющую обстановку для занятий современным танцем",
  },
];

export const StaffInfo: IStaffInfo[] = [
  {
    name: "Екатерина Лебедева",
    img: `${person7}`,
    id: 1,
    description:
      "Специалист по балету с 10-летним стажем. Обладает глубоким знанием классической техники и элегантности движений. Поможет вам развить гибкость и силу, а также научит правильной позе и выразительности",
  },
  {
    name: "Анна Иванова",
    img: `${person8}`,
    id: 2,
    description:
      "Опытный тренер по боксу с 8-летним стажем. Специализируется на технике ударов и защите.  Поможет вам улучшить координацию, выносливость и самооборону.",
  },
  {
    name: "Алексей Козлов",
    img: `${person}`,
    id: 3,
    description:
      "Профессиональный инструктор по танцам с 12-летним опытом. Обучает различным стилям танцев, включая хип-хоп, современный танец и латиноамериканские танцы. Поможет вам освоить ритм, музыкальность и хореографию.",
  },
  {
    name: "Мария Николаева",
    img: `${person4}`,
    id: 4,
    description:
      "Сертифицированный тренер по фитнесу с 10-летним стажем. Специализируется на функциональных тренировках и силовом тренинге. Поможет вам достичь физической формы, укрепить мышцы и повысить выносливость.",
  },
  {
    name: "Александра Игнатова",
    img: `${person5}`,
    id: 5,
    description:
      "Профессиональная балерина с 15-летним опытом. Обучает классическому балету и современным танцевальным техникам. Поможет вам развить грацию, пластику и сценическую выразительность",
  },
  {
    name: "Ji-Yeon",
    img: `${person6}`,
    id: 6,
    description:
      "Опытный тренер по боксу с 10-летним стажем. Специализируется на тренировках с использованием грушей и мешков. Поможет вам улучшить координацию, силу ударов и стратегическое мышление.",
  },
  {
    name: "Дмитрий Сидоров",
    img: `${person3}`,
    id: 7,
    description:
      "Лицензированный инструктор по танцам с 7-летним стажем. Обучает различным стилям танцев, включая брейк-данс и танцы на пилоне. Поможет вам освоить технику, силу и гибкость в танцевальных движениях.",
  },
  {
    name: "Санчес Лобаут Альфредо Любомир",
    img: `${person2}`,
    id: 8,
    description:
      "Сертифицированный тренер по фитнесу с 8-летним стажем. Специализируется на тренировках высокой интенсивности и функциональном тренинге. Поможет вам сжигать калории, укреплять мышцы и повышать общую физическую форму.",
  },
];

export const pagesFooter: IPagesFooter[] = [
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
    url: "/reviews",
  },
  {
    id: 5,
    title: "Контакты",
    url: "/#contactsBlock",
  },
  {
    id: 6,
    title: "Юридическая информация",
    url: "/policy",
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
    url: "/reviews",
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
  },
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
    price: 1000,
  },
  {
    id: 2,
    title: "Абонемент 2",
    data: [
      "Разовое посещение любой групповой программы",
      "Срок действия 90 дней (3 месяца)",
      "В любой день",
    ],
    price: 1000,
  },
  {
    id: 3,
    title: "Абонемент 3",
    data: [
      "Абонемент на любые 10 групповых либо детских занятий",
      "Срок действия 90 дней (3 месяца)",
      "Только в ноябре",
    ],
    price: 1000,
  },
  {
    id: 4,
    title: "Абонемент 4",
    data: [
      "Абонемент на любые 50 групповых занятий.",
      " Срок действия 180 дней (6 месяцев)",
      "В любой день",
    ],
    price: 10000,
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
  {
    id: 6,
    data: {
      user: "Сергей Иванов",
      stars: 4,
      date: "22.12.2016",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, amet.",
    },
  },
  {
    id: 7,
    data: {
      user: "Сергей Иванов",
      stars: 4,
      date: "22.12.2016",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, amet.",
    },
  },
  {
    id: 8,
    data: {
      user: "Сергей Иванов",
      stars: 4,
      date: "22.12.2016",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, amet.",
    },
  },
  {
    id: 9,
    data: {
      user: "Сергей Иванов",
      stars: 4,
      date: "22.12.2016",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, amet.",
    },
  },
  {
    id: 10,
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
    title: "Занятие 1",
    time: new Date("2023-11-06T08:00:00"),
    hall: "Зал 1",
    teacher: "Тренер Тренерович",
  },
  {
    id: 2,
    title: "Занятие 1",
    time: new Date("2023-11-07T08:00:00"),
    hall: "Зал 1",
    teacher: "Тренер Тренерович",
  },
  {
    id: 3,
    title: "Занятие 1",
    time: new Date("2023-11-08T08:00:00"),
    hall: "Зал 1",
    teacher: "Тренер Тренерович",
  },
  {
    id: 4,
    title: "Занятие 1",
    time: new Date("2023-11-09T08:00:00"),
    hall: "Зал 1",
    teacher: "Тренер Тренерович",
  },
  {
    id: 5,
    title: "Занятие 1",
    time: new Date("2023-11-10T08:00:00"),
    hall: "Зал 1",
    teacher: "Тренер Тренерович",
  },
  {
    id: 6,
    title: "Занятие 1",
    time: new Date("2023-11-11T08:00:00"),
    hall: "Зал 1",
    teacher: "Тренер Тренерович",
  },
  {
    id: 7,
    title: "Занятие 1",
    time: new Date("2023-11-12T08:00:00"),
    hall: "Зал 1",
    teacher: "Тренер Тренерович",
  },

  {
    id: 8,
    title: "Занятие 2",
    time: new Date("2023-11-06T09:00:00"),
    hall: "Зал 2",
    teacher: "Тренер Тренерович",
  },
  {
    id: 9,
    title: "Занятие 2",
    time: new Date("2023-11-07T09:00:00"),
    hall: "Зал 2",
    teacher: "Тренер Тренерович",
  },
  {
    id: 10,
    title: "Занятие 2",
    time: new Date("2023-11-08T09:00:00"),
    hall: "Зал 2",
    teacher: "Тренер Тренерович",
  },
  {
    id: 11,
    title: "Занятие 2",
    time: new Date("2023-11-09T09:00:00"),
    hall: "Зал 2",
    teacher: "Тренер Тренерович",
  },
  {
    id: 12,
    title: "Занятие 2",
    time: new Date("2023-11-10T09:00:00"),
    hall: "Зал 2",
    teacher: "Тренер Тренерович",
  },
  {
    id: 13,
    title: "Занятие 2",
    time: new Date("2023-11-11T09:00:00"),
    hall: "Зал 2",
    teacher: "Тренер Тренерович",
  },
  {
    id: 14,
    title: "Занятие 2",
    time: new Date("2023-11-12T09:00:00"),
    hall: "Зал 2",
    teacher: "Тренер Тренерович",
  },
];

export const POINTS = [
  {
    title: "Южно-Сахалинск",
    lat: 46.960791,
    lng: 142.746179,
  },
];
export const CITY = {
  title: "Южно-Сахалинск",
  lat: 46.960791,
  lng: 142.746179,
  zoom: 17,
};

export const notificationData: INotification[] = [
  {
    id: 1,
    text: "Текст нового уведомления",
    date: new Date(2014, 11, 31, 12, 30, 0),
  },
  {
    id: 2,
    text: "Текст нового уведомления",
    date: new Date(2014, 11, 31, 12, 30, 0),
  },
  {
    id: 3,
    text: "Текст нового уведомленияТекст нового уведомленияТекст нового уведомленияТекст нового уведомленияТекст нового уведомленияТекст нового уведомленияТекст нового уведомленияТекст нового уведомленияТекст нового уведомленияТекст нового уведомленияТекст нового уведомления",
    date: new Date(2014, 11, 31, 12, 30, 0),
  },
  {
    id: 4,
    text: "Текст нового уведомления",
    date: new Date(2014, 11, 31, 12, 30, 0),
  },
  {
    id: 5,
    text: "Текст нового уведомления",
    date: new Date(2014, 11, 31, 12, 30, 0),
  },
];

export const aboutStudio: IStudio = {
  id: 1,
  description: [
    "Добро пожаловать в нашу прекрасную студию, где созданы идеальные условия для развития учеников всех возрастов. Наша студия предлагает уникальные уроки балета, танцев, бокса,фитнеса и много другое, в сочетании с индивидуальным подходом к каждому ученику.  Профессиональные инструкторы помогут вам раскрыть свой потенциал,  обучая техникам, принципам грации и выразительности движения",
    "Мы создали непринужденную и дружелюбную атмосферу, где каждый ученик чувствует себя уверенно и вдохновляется к творчеству. Независимо от уровня подготовки или возраста, каждый найдет у нас что-то для себя. Мы стремимся к тому, чтобы наши ученики не только освоили навыки, но и укрепили свое тело, улучшили координацию и подняли свойдух.",
    "Наша студия  - это не просто место уроков, а место, где рождается страсть к танцу, спорту и искусству. Присоединяйтесь к нашей семье и вместе с нами откройте мир красоты, элегантности и гармонии.",
  ],
};
