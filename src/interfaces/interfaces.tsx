export interface IPagesHeader {
  id: number;
  title: string;
  url: string;
}

export interface IPagesFooter {
  id: number;
  data: {
    title: string;
    url: string;
  };
}

export interface IPricesInfo {
  id: number;
  title: string;
  data: string[];
  price: number;
}

export interface IReviewsInfo {
  id: number;
  data: {
    user: string;
    stars: number;
    date: string;
    description: string;
  };
}

export interface IBannerUrl {
  id: number;
  url: string;
}

export interface IHallUrl {
  id: number;
  url: string;
  title: string;
}

export interface IStaffInfo {
  name: string;
  description: string;
  img: string;
  id: number;
}

export interface IDashboardInfo {
  id: number;
  title: string;
  time: Date;
  hall: string;
  teacher: string;
}
