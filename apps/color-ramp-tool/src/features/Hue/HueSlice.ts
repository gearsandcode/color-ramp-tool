import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import chroma from "chroma-js";
import { RootState } from "../../store";

export interface IHueState {
  hueValue: string;
  hueHexValue: string;
}

export const initialState: IHueState = {
  hueValue: "97",
  hueHexValue: "#00ff00",
};

export const HueSlice = createSlice({
  name: "hue",
  initialState,
  reducers: {
    updateHue(state, action: PayloadAction<string>) {
      const newHue = {
        hueValue: action.payload,
        hueHexValue: chroma.hsl(parseInt(action.payload, 10), 100, 0.5).hex(),
      };
      return {
        ...state,
        ...newHue,
      };
    },
  },
});

export const selectHue = (state: RootState) => {
  return state.hue;
};

export const { updateHue } = HueSlice.actions;

export default HueSlice.reducer;
