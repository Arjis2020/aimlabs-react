import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = 0;

const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    addScore(state, action: PayloadAction<number>) {
      state += action.payload;
      return state;
    },
  },
});

export const { addScore } = scoreSlice.actions;
export default scoreSlice.reducer;