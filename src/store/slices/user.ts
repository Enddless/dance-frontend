import { LoadingStatus, NameSpace } from "../../const/const";
import { createSlice } from '@reduxjs/toolkit';
import { getCurrentUserData } from "../../services/thunk/userData";
import { UserCurrentData } from "../../types/user-type";

interface IInitialState {
  userData: UserCurrentData | null;
  isUserDataLoading: LoadingStatus;
}

const initialState: IInitialState = {
  userData: null,
  isUserDataLoading: LoadingStatus.Idle,
};

export const userSlice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
    .addCase(getCurrentUserData.pending, (state) => {
      state.isUserDataLoading = LoadingStatus.Pending;
    })
    .addCase(getCurrentUserData.fulfilled, (state, action) => {
      state.userData = action.payload;
      state.isUserDataLoading = LoadingStatus.Fulfilled;
    })
    .addCase(getCurrentUserData.rejected, (state) => {
      state.isUserDataLoading = LoadingStatus.Rejected;
    });
  },
});
