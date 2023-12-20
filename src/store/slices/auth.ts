import {
  AuthorizationStatus,
  DEFAULT_BUTTON_AREA_PERSONAL,
  LoadingStatus,
  NameSpace,
} from "../../const/const";
import { StateAuth } from "../../types/auth-type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  changeUserData,
  confirmation,
  getCurrentUserData,
  getCurrentUserRole,
  login,
  registration,
} from "../../services/thunk/auth";
import { deleteToken } from "../../services/token";

const initialState: StateAuth = {
  authStatus: AuthorizationStatus.Unknown,
  isRegistrationLoading: LoadingStatus.Idle,
  isConfirmationLoading: LoadingStatus.Idle,
  message: "",
  userData: {},
  userRole: null,
  isUserDataLoading: LoadingStatus.Idle,
  isUserRoleLoading: LoadingStatus.Idle,
  buttonActive: DEFAULT_BUTTON_AREA_PERSONAL.title,
};

export const authSlice = createSlice({
  name: NameSpace.Auth,
  initialState,
  reducers: {
    logout(state) {
      state.authStatus = AuthorizationStatus.NoAuth;
      state.userData = {};
      state.userRole = null;
      deleteToken();
    },
    changeActiveButtonMenuPersonal(state, action: PayloadAction<string>) {
      state.buttonActive = action.payload;
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
      // ***** userdata *****
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
      })
      // ***** change userdata *****
      .addCase(changeUserData.pending, (state) => {
        state.isUserDataLoading = LoadingStatus.Pending;
      })
      .addCase(changeUserData.fulfilled, (state, action) => {
        state.message = action.payload;
        state.isUserDataLoading = LoadingStatus.Fulfilled;
      })
      .addCase(changeUserData.rejected, (state) => {
        state.isUserDataLoading = LoadingStatus.Rejected;
      })
      // ***** user-role *****
      .addCase(getCurrentUserRole.pending, (state) => {
        state.isUserRoleLoading = LoadingStatus.Pending;
      })
      .addCase(getCurrentUserRole.fulfilled, (state, action) => {
        state.userRole = action.payload;
        state.authStatus = AuthorizationStatus.Auth;
        state.isUserRoleLoading = LoadingStatus.Fulfilled;
      })
      .addCase(getCurrentUserRole.rejected, (state) => {
        state.isUserRoleLoading = LoadingStatus.Rejected;
      })
      // ***** delete account *****
      // .addCase(deleteUserData.fulfilled, (state, action) => {
      //   state.authStatus = AuthorizationStatus.NoAuth;
      //   state.message = action.payload;
      // });
  },
});
