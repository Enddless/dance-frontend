import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIRoute } from "../../const/route";
import {
  AuthData,
  AuthWithCodeData,
  ReturnData,
  UserCurrentData,
  UserCurrentPhoto,
  UserCurrentRole,
} from "../../types/auth-type";
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

export const login = createAsyncThunk<void | string, AuthData, Extra>(
  "user/login",
  async ({ emailUser, password }, { extra: api }) => {
    const {
      data: { token, refresh },
      data,
    } = await api.post(APIRoute.Login, {
      emailUser,
      password,
    });
    addToken({ token, refresh });
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

export const changeUserData = createAsyncThunk<string, UserCurrentData, Extra>(
  "user/updatedata",
  async ({ userName, genders, phoneNumber, dateOfBirth }, { extra: api }) => {
    const { data } = await api.post(APIRoute.UserData, {
      userName,
      genders,
      phoneNumber,
      dateOfBirth,
    });

    return data;
  }
);
export const changeUserPhoto = createAsyncThunk<
  string,
  UserCurrentPhoto,
  Extra
>("user/updatePhoto", async ({ photoUser }, { extra: api }) => {
  const { data } = await api.post(APIRoute.AddPhoto, photoUser, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });

  return data;
});

export const deleteUserPhoto = createAsyncThunk<string, undefined, Extra>(
  "user/deletePhoto",
  async (_arg, { extra: api }) => {
    const { data } = await api.delete(APIRoute.AddPhoto);

    return data;
  }
);

// export const deleteUserData = createAsyncThunk<string, UserCurrentData, Extra>(
//   "user/deleteData",
//   async ({ emailUser, password }, { extra: api }) => {
//     const { data } = await api.delete(APIRoute.DeleteUser, {
//       emailUser,
//       password
//     });

//     return data;
//   }
// );

// ********** USER-ROLE **********
export const getCurrentUserRole = createAsyncThunk<
  UserCurrentRole,
  string | undefined,
  Extra
>("user/role", async (_arg, { extra: api }) => {
  const { data } = await api.get<UserCurrentRole>(APIRoute.Role);

  return data;
});

// ********** UPDATE TOKEN **********
export const updateToken = createAsyncThunk<void, undefined, Extra>(
  "auth/updateToken",
  async (_arg, { extra: api }) => {
    const {
      data: { token, refresh },
      data,
    } = await api.post(APIRoute.UpdateToken);
    addToken({ token, refresh });
    return data;
  }
);
