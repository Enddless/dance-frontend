export interface IPagesHeader {
  id: number,
  title: string,
  url: string,
}

export interface IPagesFooter {
  id: number,
  data: {
    title: string,
    url: string,
  } 
}

