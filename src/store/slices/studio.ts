import { createSlice } from "@reduxjs/toolkit";
import { LoadingStatus, NameSpace } from "../../const/const";
import {
  aboutStudio,
  addHall,
  addHallPhoto,
  addTeacher,
  addTeacherPhoto,
  changeAboutStudio,
  changeBanner,
  deleteBanner,
  deleteHall,
  deleteTeacher,
  getBanners,
  getHalls,
  getPrice,
  getTeachers,
} from "../../services/thunk/studio";
import { StateStudio } from "../../types/auth-type";

const initialState: StateStudio = {
  message: "",
  isStudioDataLoading: LoadingStatus.Idle,
  isBannerLoading: LoadingStatus.Idle,
  isHallsLoading: LoadingStatus.Idle,
  isTeachersLoading: LoadingStatus.Idle,
  isPriceLoading:LoadingStatus.Idle,
  aboutStudioData: null,
  bannersData: [],
  hallsData: [],
  currentHallData: null,
  techersData: [],
  currentTeacherData: null,
  priceData: [],
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
      })
      // ***** halls *****
      .addCase(getHalls.pending, (state) => {
        state.isHallsLoading = LoadingStatus.Pending;
      })
      .addCase(getHalls.fulfilled, (state, action) => {
        state.hallsData = action.payload;
        state.isHallsLoading = LoadingStatus.Fulfilled;
      })
      .addCase(getHalls.rejected, (state) => {
        state.isHallsLoading = LoadingStatus.Rejected;
      })
      // ***** add hall photo *****
      .addCase(addHallPhoto.fulfilled, (state, action) => {
        state.currentHallData = action.payload;
      })
      // ***** change hall *****
      .addCase(addHall.pending, (state) => {
        state.isHallsLoading = LoadingStatus.Pending;
      })
      .addCase(addHall.fulfilled, (state) => {
        state.currentHallData = null;
        state.isHallsLoading = LoadingStatus.Fulfilled;
      })
      .addCase(addHall.rejected, (state) => {
        state.isHallsLoading = LoadingStatus.Rejected;
      })
      // ***** delete hall *****
      .addCase(deleteHall.pending, (state) => {
        state.isHallsLoading = LoadingStatus.Pending;
      })
      .addCase(deleteHall.fulfilled, (state, action) => {
        state.message = action.payload;
        state.bannersData = [];
        state.isHallsLoading = LoadingStatus.Fulfilled;
      })
      .addCase(deleteHall.rejected, (state) => {
        state.isHallsLoading = LoadingStatus.Rejected;
      })
      // ***** get teachers *****
      .addCase(getTeachers.pending, (state) => {
        state.isTeachersLoading = LoadingStatus.Pending;
      })
      .addCase(getTeachers.fulfilled, (state, action) => {
        state.techersData = action.payload;
        state.isTeachersLoading = LoadingStatus.Fulfilled;
      })
      .addCase(getTeachers.rejected, (state) => {
        state.isTeachersLoading = LoadingStatus.Rejected;
      })
      // ***** add teacher photo *****
      .addCase(addTeacherPhoto.fulfilled, (state, action) => {
        state.currentTeacherData = action.payload;
      })
      // ***** add teacher data *****
      .addCase(addTeacher.pending, (state) => {
        state.isTeachersLoading = LoadingStatus.Pending;
      })
      .addCase(addTeacher.fulfilled, (state) => {
        state.currentTeacherData = null;
        state.isTeachersLoading = LoadingStatus.Fulfilled;
      })
      .addCase(addTeacher.rejected, (state) => {
        state.isTeachersLoading = LoadingStatus.Rejected;
      })
      // ***** delete teacher *****
      .addCase(deleteTeacher.pending, (state) => {
        state.isTeachersLoading = LoadingStatus.Pending;
      })
      .addCase(deleteTeacher.fulfilled, (state, action) => {
        state.message = action.payload;
        state.techersData = [];
        state.isTeachersLoading = LoadingStatus.Fulfilled;
      })
      .addCase(deleteTeacher.rejected, (state) => {
        state.isTeachersLoading = LoadingStatus.Rejected;
      })
      // ***** get price *****
      .addCase(getPrice.pending, (state) => {
        state.isPriceLoading = LoadingStatus.Pending;
      })
      .addCase(getPrice.fulfilled, (state, action) => {
        state.priceData = action.payload;
        state.isPriceLoading = LoadingStatus.Fulfilled;
      })
      .addCase(getPrice.rejected, (state) => {
        state.isPriceLoading = LoadingStatus.Rejected;
      })
      ;
  },
});
