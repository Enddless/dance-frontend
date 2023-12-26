import {  AUTH_REFRESH_TOKEN_NAME, AUTH_TOKEN_NAME } from "../const/const";
import Cookies from "js-cookie";

export type Token = {
  token: string;
  // refresh: string;
};
export const getToken = (): Token => {
  const token = localStorage.getItem(AUTH_TOKEN_NAME);
  // const refresh = localStorage.getItem(AUTH_REFRESH_TOKEN_NAME);
  // const refresh = Cookies.get(AUTH_REFRESH_TOKEN_NAME);
  // return token && refresh ? { token, refresh } : { token: "", refresh: "" };
  return token ? {token} :  { token: ""};
};

export const addToken = ({ token  }: Token): void => {
  localStorage.setItem(AUTH_TOKEN_NAME, token);
  // localStorage.setItem(AUTH_REFRESH_TOKEN_NAME, refresh);
  // const refresh = document.cookie;
  // console.log(refresh)
  // Cookies.set(AUTH_REFRESH_TOKEN_NAME, refresh);
};

export const deleteToken = (): void => {
  localStorage.removeItem(AUTH_TOKEN_NAME);
  // localStorage.removeItem(AUTH_REFRESH_TOKEN_NAME);
  // Cookies.remove(AUTH_REFRESH_TOKEN_NAME);
};
