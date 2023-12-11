import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIRoute } from "../../const/route";
import { AuthData, AuthWithCodeData, ReturnData, UserCurrentData, UserCurrentRole } from "../../types/auth-type";
import { addToken } from "../token";
import { Extra } from "../type-service";


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

export const confirmation = createAsyncThunk<
  ReturnData,
  AuthWithCodeData,
  Extra
>(
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
    const {
      data: { token },
      data,
    } = await api.post(APIRoute.Login, {
      emailUser,
      password,
    });
    addToken(token);
    return data;
  }
);

// ********** USERDATA **********
export const getCurrentUserData = createAsyncThunk<
  UserCurrentData,
  string | undefined,
  Extra
>("user/data", async (_arg, { extra: api }) => {
  const { data } = await api.get<UserCurrentData>(APIRoute.UserData);

  return data;
});

// ********** USER-ROLE **********
export const getCurrentUserRole = createAsyncThunk<
UserCurrentRole,
  string | undefined,
  Extra
>("user/role", async (_arg, { extra: api }) => {
  const { data } = await api.get<UserCurrentRole>(APIRoute.Role);

  return data;
});
