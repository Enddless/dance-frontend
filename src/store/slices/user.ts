import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DEFAULT_BUTTON_AREA_PERSONAL, LoadingStatus, NameSpace } from "../../const/const";
import { getTickets } from "../../services/thunk/user";
import { StateUserData } from "../../types/user-types";

const initialState: StateUserData = {
  userTickets: null,
  isTicketsLoading: LoadingStatus.Idle,
  buttonActive: DEFAULT_BUTTON_AREA_PERSONAL.title,
};

export const userSlice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    changeActiveButtonMenuPersonal(state, action: PayloadAction<string>) {
      state.buttonActive = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      // ***** tickets *****
      .addCase(getTickets.pending, (state) => {
        state.isTicketsLoading = LoadingStatus.Pending;
      })
      .addCase(getTickets.fulfilled, (state, action) => {
        state.isTicketsLoading = LoadingStatus.Fulfilled;
        state.userTickets = action.payload;
      })
      .addCase(getTickets.rejected, (state) => {
        state.isTicketsLoading = LoadingStatus.Rejected;
      })
      ;
  },
});

export const { changeActiveButtonMenuPersonal } = userSlice.actions;