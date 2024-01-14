import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIRoute } from "../../const/route";
import {
  AboutStudioData,
  Banner,
  BannersData,
  CurrentBannerId,
} from "../../types/auth-type";
import { Extra } from "../type-service";

// ********** get about studio data **********
export const aboutStudio = createAsyncThunk<AboutStudioData, undefined, Extra>(
  "admin/aboutStudio",
  async (_arg, { extra: api }) => {
    const { data } = await api.get<AboutStudioData>(APIRoute.AboutStudio);

    return data;
  }
);
// ********** change about studio data **********
export const changeAboutStudio = createAsyncThunk<
  string,
  string,
  Extra
>("admin/changeAboutStudio", async (description, { extra: api }) => {
  const { data } = await api.post(APIRoute.AboutStudio, {
    description: description },
  );

  return data;
});

// ********** get banner  **********
export const getBanners = createAsyncThunk<
  BannersData[],
  string | undefined,
  Extra
>("admin/getBanner", async (_arg, { extra: api }) => {
  const { data } = await api.get<BannersData[]>(APIRoute.Banner);
  return data;
});

// ********** change banner **********
export const changeBanner = createAsyncThunk<string, Banner, Extra>(
  "admin/changeBanner",
  async ({ PhotoBanner }, { extra: api }) => {
    const { data } = await api.post(APIRoute.Banner, PhotoBanner, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    return data;
  }
);

// ********** delete banner **********
export const deleteBanner = createAsyncThunk<string, CurrentBannerId, Extra>(
  "admin/deleteBanner",
  async ({ IdBanner }, { extra: api }) => {
    const { data } = await api.delete(APIRoute.Banner, {
      data: { IdBanner: IdBanner },
    });

    return data;
  }
);
