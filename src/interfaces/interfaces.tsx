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

export interface IServicesInfo {
  id: number;
  data: {
    title: string;
    description: string;
    url: string;
  };
}

export interface IPricesInfo {
  id: number;
  data: {
    title: string;
    price: number;
    description: string;
    url: string;
  };
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
