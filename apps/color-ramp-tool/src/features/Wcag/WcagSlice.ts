import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface IWcagState {
  AANormal: IWcagContrast;
  AALarge: IWcagContrast;
  AAANormal: IWcagContrast;
  AAALarge: IWcagContrast;
}

export interface IWcagContrast {
  pass: boolean;
  contrast: string;
}

export interface IWcagContrastRatios {
  AANormal: { name: "AA Normal"; ratio: 4.5 };
  AALarge: { name: "AA Large"; ratio: 3 };
  AAANormal: { name: "AAA Normal"; ratio: 7 };
  AAALarge: { name: "AAA Large"; ratio: 4.5 };
}

export interface IWcagContrastState {
  AANormal: IWcagContrast;
  AALarge: IWcagContrast;
  AAANormal: IWcagContrast;
  AAALarge: IWcagContrast;
}

export const initialState: IWcagState = {
  AANormal: { pass: false, contrast: "0" },
  AALarge: { pass: false, contrast: "0" },
  AAANormal: { pass: false, contrast: "0" },
  AAALarge: { pass: false, contrast: "0" },
};

export const WcagSlice = createSlice({
  name: "wcag",
  initialState,
  reducers: {
    updateWcag(state, action: PayloadAction<string>) {
      return {
        ...state,
      };
    },
  },
});

export const selectWcag = (state: RootState) => {
  return state.wcag;
};

export const { updateWcag } = WcagSlice.actions;

export default WcagSlice.reducer;
