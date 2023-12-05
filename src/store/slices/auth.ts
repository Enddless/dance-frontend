import {
  AuthorizationStatus,
  LoadingStatus,
  NameSpace,
} from "../../const/const";
import { StateAuth } from "../../types/auth-type";
import { createSlice } from "@reduxjs/toolkit";
import {
  confirmation,
  login,
  logout,
  registration,
} from "../../services/thunk/auth";
const initialState: StateAuth = {
  authStatus: AuthorizationStatus.Unknown,
  isRegistrationLoading: LoadingStatus.Idle,
  isConfirmationLoading: LoadingStatus.Idle,
  message: "",
};

export const authSlice = createSlice({
  name: NameSpace.Auth,
  initialState,
  reducers: {
    requireAuthStatus(state, action) {
      state.authStatus = action.payload;
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
        // state.userData
      })
      .addCase(login.rejected, (state) => {
        state.isConfirmationLoading = LoadingStatus.Rejected;
        state.authStatus = AuthorizationStatus.NoAuth;
      })
      // ***** logout *****
      .addCase(logout.fulfilled, (state) => {
        state.authStatus = AuthorizationStatus.NoAuth;
      });
    // ***** checkAuth *****
    // .addCase(checkAuth.pending, (state) => {
    //   state.authStatus = AuthorizationStatus.Unknown;
    // })
    // .addCase(checkAuth.fulfilled, (state) => {
    //   state.authStatus = AuthorizationStatus.Auth;
    // })
    // .addCase(checkAuth.rejected, (state) => {
    //   state.authStatus = AuthorizationStatus.NoAuth;
    // });
  },
});
