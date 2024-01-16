import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { generateHitboxes, getRandomIndex } from "../../components/TargetContainer/TargetContainerFunctions";
import { MAX_HITBOXES, MAX_SIMULTANEOUS_HITBOXES } from '../../constants';

const initialState = {
  targets: generateHitboxes(MAX_HITBOXES, MAX_SIMULTANEOUS_HITBOXES),
  combo: 1,
  multiplier: 1,
  wasLastHit: false,
  lastHitTimestamp: -1,
};

const targetSlice = createSlice({
  name: 'targets',
  initialState,
  reducers: {
    shuffle(state, action: PayloadAction<number>) {
      const hitIndex = action.payload;
      state.targets[hitIndex] = 0;

      while (true) {
        const randomIndex = getRandomIndex(MAX_HITBOXES);
        if (randomIndex !== hitIndex && state.targets[randomIndex] === 0) {
          state.targets[randomIndex] = 1;
          break;
        }
      }

      return state;
    },
    targetHit(state) {
      const currentTimestamp = new Date().getTime();
      let multiplier = 1;
      if (state.wasLastHit) {
        state.combo++;
      }
      state.wasLastHit = true;
      if (state.lastHitTimestamp !== -1) {
        const delta = currentTimestamp - state.lastHitTimestamp;
        if (delta < 350) {
          multiplier = 50;
        }
        else if (delta < 420) {
          multiplier = 30;
        }
        else if (delta < 500) {
          multiplier = 20;
        }
      }
      state.multiplier = multiplier;
      state.lastHitTimestamp = currentTimestamp;
      return state;
    },
    targetMiss(state) {
      state.combo = 1;
      state.wasLastHit = false;
      state.lastHitTimestamp = -1;
      return state;
    },
  },
});

export const { shuffle, targetHit, targetMiss } = targetSlice.actions;
export default targetSlice.reducer;