import {
  AuthorizationStatus,
  LoadingStatus,
  NameSpace,
} from "../../const/const";
import { StateAuth } from "../../types/auth-type";
import { createSlice } from "@reduxjs/toolkit";
import {
  confirmation,
  getCurrentUserData,
  login,
  registration,
} from "../../services/thunk/auth";
import { deleteToken } from "../../services/token";

const initialState: StateAuth = {
  authStatus: AuthorizationStatus.Unknown,
  isRegistrationLoading: LoadingStatus.Idle,
  isConfirmationLoading: LoadingStatus.Idle,
  message: "",
  userData: null,
  isUserDataLoading: LoadingStatus.Idle,
};

export const authSlice = createSlice({
  name: NameSpace.Auth,
  initialState,
  reducers: {
    logout(state) {
      state.authStatus = AuthorizationStatus.NoAuth;
      state.userData = null;
      deleteToken();
    },
  },
  extraReducers(builder) {
    builder
      // ***** registration *****
      .addCase(registration.pending, (state) => {
        state.isRegistrationLoading = LoadingStatus.Pending;
      })
      .addCase(registration.fulfilled, (state, action) => {
        state.isRegistrationLoading = LoadingStatus.Fulfilled;
        state.message = action.payload;
      })
      .addCase(registration.rejected, (state) => {
        state.isRegistrationLoading = LoadingStatus.Rejected;
      })
      // ***** confirmation *****
      .addCase(confirmation.pending, (state) => {
        state.isConfirmationLoading = LoadingStatus.Pending;
      })
      .addCase(confirmation.fulfilled, (state) => {
        state.isConfirmationLoading = LoadingStatus.Fulfilled;
      })
      .addCase(confirmation.rejected, (state) => {
        state.isConfirmationLoading = LoadingStatus.Rejected;
      })
      // ***** login *****
      .addCase(login.pending, (state) => {
        state.isConfirmationLoading = LoadingStatus.Pending;
        state.authStatus = AuthorizationStatus.Unknown;
      })
      .addCase(login.fulfilled, (state) => {
        state.isConfirmationLoading = LoadingStatus.Fulfilled;
        state.authStatus = AuthorizationStatus.Auth;
      })
      .addCase(login.rejected, (state) => {
        state.isConfirmationLoading = LoadingStatus.Rejected;
        state.authStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(getCurrentUserData.pending, (state) => {
        state.isUserDataLoading = LoadingStatus.Pending;
      })
      .addCase(getCurrentUserData.fulfilled, (state, action) => {
        state.userData = action.payload;
        state.authStatus = AuthorizationStatus.Auth;
        state.isUserDataLoading = LoadingStatus.Fulfilled;
      })
      .addCase(getCurrentUserData.rejected, (state) => {
        state.isUserDataLoading = LoadingStatus.Rejected;
      });
  },
});
