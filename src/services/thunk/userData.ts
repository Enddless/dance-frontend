import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIRoute } from "../../const/route";
import { Extra } from "../type-service";
import { UserCurrentData } from "../../types/user-type";

// ********** USERDATA **********
export const getCurrentUserData = createAsyncThunk<UserCurrentData, string | undefined, Extra>(
  "user/role",
  async (_arg, { extra: api }) => {
    const { data } = await api.get<UserCurrentData>(APIRoute.Role);

    return data;
  }
);
