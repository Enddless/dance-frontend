import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIRoute } from "../../const/route";
import { AuthData, AuthWithCodeData, ReturnData } from "../../types/auth-type";
import { addToken } from "../token";
// import { authSlice } from "../../store/slices/auth";
import { Extra } from "../type-service";
// import { AuthorizationStatus } from "../../const/const";

// ********** AUTH **********
export const registration = createAsyncThunk<ReturnData, AuthData, Extra>(
  "user/registration",
  async ({ emailUser, password }, { extra: api }) => {
    const { data } = await api.post<ReturnData>(APIRoute.Registration, {
      emailUser,
      password,
    });

    return data;
  }
);

export const confirmation = createAsyncThunk<ReturnData, AuthWithCodeData, Extra>(
  "user/confirmation",
  async ({ emailUser, password, code }, { extra: api }) => {
    const { data } = await api.post<ReturnData>(APIRoute.Confirmation, {
      emailUser,
      password,
      code,
    });

    return data;
  }
);

export const login = createAsyncThunk<void, AuthData, Extra>(
  "user/login",
  async ({ emailUser, password }, { extra: api }) => {
    const { data: {token}, data} = await api.post(APIRoute.Login, {
      emailUser,
      password,
    });
    addToken(token);
    return data;
  }
);

export const logout = createAsyncThunk<void, AuthData, Extra>(
  "user/logout",
  async ({ emailUser, password }, { extra: api }) => {
    const { data } = await api.post(APIRoute.Login, {
      emailUser,
      password,
    });
    addToken(data.token);
    return data;
  }
);

// export const checkAuth = createAsyncThunk<void, undefined, Extra>(
//     'user/checkAuth',
//     async (_arg, { dispatch, extra: api }) => {
//       try {
//         await api.post(APIRoute.Login);
//         dispatch(
//           authSlice.actions.requireAuthStatus(AuthorizationStatus.Auth)
//         );
//       } catch {
//         dispatch(
//           authSlice.actions.requireAuthStatus(AuthorizationStatus.NoAuth)
//         );
//       }
//     }
// );
