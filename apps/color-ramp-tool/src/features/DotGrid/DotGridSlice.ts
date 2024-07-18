import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import generateColor from "../../util/generateColor";
import { IColor } from "../../util/generateColor";
import { TRampsState } from "../Ramps/RampSlice";

export type TGrid = {
  id: string;
  color: IColor;
};

export type TGridState = {
  grayscaleFilter?: boolean;
  wcagFilter?: boolean;
  list: TGrid[];
};

const initialState = {
  grayscaleFilter: false,
  wcagFilter: false,
  list: [],
} as TGridState;

export const DotGridSlice = createSlice({
  name: "grids",
  initialState,
  reducers: {
    resetGrid(state) {
      Object.assign(state, initialState);
    },
    updateGrid(state, action: PayloadAction<string>) {
      const list = [];

      for (let v = 100; v >= 0; v--) {
        for (let s = 0; s <= 100; s++) {
          const color = generateColor({
            h: parseInt(action.payload, 10),
            s: s / 100,
            v: v / 100,
          });
          list.push({ id: (s + v).toString(), color });
        }
      }
      return {
        ...state,
        list,
      };
    },
    applyRampFilter(state, action: PayloadAction<TRampsState>) {
      state.list.map((stateItem) => {
        const rampFiltered = !action.payload.list.some(
          (item) =>
            item.lightness === Math.round(stateItem.color.lab.l).toString()
        );
        return (stateItem.color.rampFiltered = rampFiltered);
      });
      return Object.assign(state);
    },
    removeRampFilter(state: TGridState) {
      state.list.map((stateItem) => (stateItem.color.rampFiltered = false));
    },
    applyGrayscaleFilter(state: TGridState) {
      state.list.map((stateItem) => (stateItem.color.grayFiltered = true));
      state.grayscaleFilter = true;
    },
    removeGrayscaleFilter(state: TGridState) {
      state.list.map((stateItem) => (stateItem.color.grayFiltered = false));
      state.grayscaleFilter = false;
    },
    toggleGrayscale(state) {
      return {
        ...state,
        grayscaleFilter: !state.grayscaleFilter,
      };
    },
    toggleWcag(state) {
      return {
        ...state,
        wcagFilter: !state.wcagFilter,
      };
    },
  },
});

export const selectGrid = (state: RootState) => {
  return [...state.grid.list];
};
export const selectGrayscaleActive = (state: RootState) => {
  return state.grid.grayscaleFilter;
};
export const selectRampById = (state: RootState, rampId: string) =>
  state.ramp.list.find((ramp) => ramp.id === rampId);
export const {
  resetGrid,
  updateGrid,
  applyRampFilter,
  removeRampFilter,
  toggleGrayscale,
  applyGrayscaleFilter,
  removeGrayscaleFilter,
  toggleWcag,
} = DotGridSlice.actions;
export default DotGridSlice.reducer;
