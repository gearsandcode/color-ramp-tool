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
  list: TGrid[];
};

const initialState = {
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
      let list = [];

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
    removeRampFilter(state) {
      state.list.map((stateItem) => (stateItem.color.rampFiltered = false));
    },
  },
});

export const selectGrid = (state: RootState) => {
  return [...state.grid.list];
};
export const selectRampById = (state: RootState, rampId: string) =>
  state.ramp.list.find((ramp) => ramp.id === rampId);
export const { resetGrid, updateGrid, applyRampFilter, removeRampFilter } =
  DotGridSlice.actions;
export default DotGridSlice.reducer;
