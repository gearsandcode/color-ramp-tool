import { configureStore } from "@reduxjs/toolkit";
import rampReducer from "./features/Ramps/RampSlice";
import hueReducer from "./features/Hue/HueSlice";
import gridReducer from "./features/DotGrid/DotGridSlice";

export const store = configureStore({
  // Remove timeout errors because the grid object is so big (10000 objects)
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
  reducer: {
    ramp: rampReducer,
    hue: hueReducer,
    grid: gridReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
