import { IPagesFooter, IPagesHeader, IServicesInfo, IPricesInfo, IReviewsInfo } from "../interfaces/interfaces";

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
      url: "/",
    },
  },
  {
    id: 2,
    data: {
      title: "Услуги",
      url: "/service",
    },
  },
  {
    id: 3,
    data: {
      title: "Цены и абонементы",
      url: "/price",
    },
  },
  {
    id: 4,
    data: {
      title: "Расписание",
      url: "/dashboard",
    },
  },
  {
    id: 5,
    data: {
      title: "Персонал",
      url: "/personal",
    },
  },
  {
    id: 6,
    data: {
      title: "Контакты",
      url: "/contacts",
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
    title: "Услуги",
    url: "/service",
  },
  {
    id: 3,
    title: "Цены и абонементы",
    url: "/price",
  },
  {
    id: 4,
    title: "Расписание",
    url: "/dashboard",
  },
  {
    id: 5,
    title: "Персонал",
    url: "/personal",
  },
  {
    id: 6,
    title: "Контакты",
    url: "/contacts",
  },
  {
    id: 7,
    title: "Скачать приложение",
    url: "",
  },
];

export const servicesInfo: IServicesInfo[] = [
  {
    id: 1,
    data: {
      title: "Услуга 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, amet.",
      url: "",
    }
  },
  {
    id: 2,
    data: {
      title: "Услуга 2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, amet.",
      url: "",
    }
  },
  {
    id: 3,
    data: {
      title: "Услуга 3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, amet.",
      url: "",
    }
  },
  {
    id: 4,
    data: {
      title: "Услуга 4",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, amet.",
      url: "",
    }
  }
];

export const pricesInfo: IPricesInfo[] = [
  {
    id: 1,
    data: {
      title: "Абонемент 1",
      price: 1000,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, amet.",
      url: "",
    }
  },
  {
    id: 2,
    data: {
      title: "Абонемент 2",
      price: 1000,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, amet.",
      url: "",
    }
  },
  {
    id: 3,
    data: {
      title: "Абонемент 3",
      price: 1000,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, amet.",
      url: "",
    }
  },
  {
    id: 4,
    data: {
      title: "Абонемент 4",
      price: 1000,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, amet.",
      url: "",
    }
  },
  {
    id: 5,
    data: {
      title: "Абонемент 5",
      price: 1000,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, amet.",
      url: "",
    }
  },
  {
    id: 6,
    data: {
      title: "Абонемент 6",
      price: 1000,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, amet.",
      url: "",
    }
  }
];

export const reviewsInfo: IReviewsInfo[] = [
  {
    id: 1,
    data: {
      user: "Сергей Иванов",
      stars: 4,
      date: "22.12.2016",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, amet.",
    }
  },
  {
    id: 2,
    data: {
      user: "Сергей Иванов",
      stars: 4,
      date: "22.12.2016",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, amet.",
    }
  },
  {
    id: 3,
    data: {
      user: "Сергей Иванов",
      stars: 4,
      date: "22.12.2016",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, amet.",
    }
  },
];
