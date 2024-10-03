import { APIRoute } from '../const/route';
import { MainPageData } from '../types/auth-type';
import axiosApi from './api';

const getMainPageData = async (): Promise<MainPageData> => {
  const { data } = await axiosApi.get<MainPageData>(APIRoute.MainPage);
  console.log('response=', data);
  return data;
};

const mainPageService = {
  getMainPageData
};

export default mainPageService;
