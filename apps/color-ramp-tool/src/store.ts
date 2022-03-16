import { configureStore } from "@reduxjs/toolkit";
import rampReducer from "./features/Ramps/RampSlice";
import hueReducer from "./features/Hue/HueSlice";
import gridReducer from "./features/DotGrid/DotGridSlice";

export const store = configureStore({
  reducer: {
    ramp: rampReducer,
    hue: hueReducer,
    grid: gridReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
