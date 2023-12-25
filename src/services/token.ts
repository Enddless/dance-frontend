import { AUTH_REFRESH_TOKEN_NAME, AUTH_TOKEN_NAME } from "../const/const";

export type Token = {
  token: string;
  refresh: string;
};
export const getToken = (): Token => {
  const token = localStorage.getItem(AUTH_TOKEN_NAME);
  const refresh = localStorage.getItem(AUTH_REFRESH_TOKEN_NAME);
  return token && refresh ? {token, refresh} : {token: "", refresh: ""};
};

export const addToken = ({token, refresh}: Token): void => {
  localStorage.setItem(AUTH_TOKEN_NAME, token);
  localStorage.setItem(AUTH_REFRESH_TOKEN_NAME, refresh);
};

export const deleteToken = (): void => {
  localStorage.removeItem(AUTH_TOKEN_NAME);
  localStorage.removeItem(AUTH_REFRESH_TOKEN_NAME);
};
