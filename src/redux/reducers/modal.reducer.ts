import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInitialModalState, TModal } from "../types";

const initialState: IInitialModalState = {
  type: '',
  isOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<TModal>) {
      state.type = action.payload;
      state.isOpen = true;
      return state;
    },
    toggleModal(state, action: PayloadAction<TModal>) {
      state.type = state.type ? '' : action.payload;
      state.isOpen = !state.isOpen;
      return state;
    },
    closeModal(state) {
      state.type = '';
      state.isOpen = false;
      return state;
    },
  },
});

export const { openModal, toggleModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;