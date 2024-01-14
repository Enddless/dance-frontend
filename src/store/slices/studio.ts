import { createSlice } from "@reduxjs/toolkit";
import { LoadingStatus, NameSpace } from "../../const/const";
import {
  aboutStudio,
  changeAboutStudio,
  changeBanner,
  deleteBanner,
  getBanners,
} from "../../services/thunk/studio";
import { StateStudio } from "../../types/auth-type";

const initialState: StateStudio = {
  message: "",
  isStudioDataLoading: LoadingStatus.Idle,
  isBannerLoading: LoadingStatus.Idle,
  aboutStudioData: null,
  bannersData: [],
};

export const studioSlice = createSlice({
  name: NameSpace.Studio,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // ***** about studio *****
      .addCase(aboutStudio.pending, (state) => {
        state.isStudioDataLoading = LoadingStatus.Pending;
      })
      .addCase(aboutStudio.fulfilled, (state, action) => {
        state.aboutStudioData = action.payload;
        state.isStudioDataLoading = LoadingStatus.Fulfilled;
      })
      .addCase(aboutStudio.rejected, (state) => {
        state.isStudioDataLoading = LoadingStatus.Rejected;
      })
      // ***** change about studio *****
      .addCase(changeAboutStudio.pending, (state) => {
        state.isStudioDataLoading = LoadingStatus.Pending;
      })
      .addCase(changeAboutStudio.fulfilled, (state, action) => {
        state.message = action.payload;
        state.isStudioDataLoading = LoadingStatus.Fulfilled;
      })
      .addCase(changeAboutStudio.rejected, (state) => {
        state.isStudioDataLoading = LoadingStatus.Rejected;
      })
      // ***** get banners*****
      .addCase(getBanners.pending, (state) => {
        state.isBannerLoading = LoadingStatus.Pending;
      })
      .addCase(getBanners.fulfilled, (state, action) => {
        state.bannersData = action.payload;
        state.isBannerLoading = LoadingStatus.Fulfilled;
      })
      .addCase(getBanners.rejected, (state) => {
        state.isBannerLoading = LoadingStatus.Rejected;
      })
      // ***** change banner*****
      .addCase(changeBanner.pending, (state) => {
        state.isBannerLoading = LoadingStatus.Pending;
      })
      .addCase(changeBanner.fulfilled, (state, action) => {
        state.message = action.payload;
        state.isBannerLoading = LoadingStatus.Fulfilled;
      })
      .addCase(changeBanner.rejected, (state) => {
        state.isBannerLoading = LoadingStatus.Rejected;
      })
      // ***** delete banner*****
      .addCase(deleteBanner.pending, (state) => {
        state.isBannerLoading = LoadingStatus.Pending;
      })
      .addCase(deleteBanner.fulfilled, (state, action) => {
        state.message = action.payload;
        state.bannersData = [];
        state.isBannerLoading = LoadingStatus.Fulfilled;
      })
      .addCase(deleteBanner.rejected, (state) => {
        state.isBannerLoading = LoadingStatus.Rejected;
      });
  },
});
