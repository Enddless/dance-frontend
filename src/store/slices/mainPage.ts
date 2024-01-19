import { createSlice } from "@reduxjs/toolkit";
import { LoadingStatus, NameSpace } from "../../const/const";
import { mainPageData } from "../../services/thunk/mainPage";
import { MainPageState } from "../../types/auth-type";

const initialState: MainPageState = {
  mainPage: null,
  isMainPageDataLoading: LoadingStatus.Idle,
};

export const mainPageSlice = createSlice({
  name: NameSpace.MainPage,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // ***** about studio *****
      .addCase(mainPageData.pending, (state) => {
        state.isMainPageDataLoading = LoadingStatus.Pending;
      })
      .addCase(mainPageData.fulfilled, (state, action) => {
        state.mainPage = action.payload;
        state.isMainPageDataLoading = LoadingStatus.Fulfilled;
      })
      .addCase(mainPageData.rejected, (state) => {
        state.isMainPageDataLoading = LoadingStatus.Rejected;
      });
  },
});
