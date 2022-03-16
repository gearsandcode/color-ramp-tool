import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type TRampId = string;

export type TRamp = {
  id: string;
  name: string;
  lightness: string;
};

export type TRampsState = {
  active?: boolean;
  list: TRamp[];
};

const initialState = {
  active: false,
  list: [
    { id: "1647047155002", name: "50", lightness: "98" },
    { id: "1647047158388", name: "100", lightness: "95" },
    { id: "1647047160992", name: "200", lightness: "89" },
    { id: "1647047291580", name: "300", lightness: "81" },
    { id: "1647047291993", name: "400", lightness: "71" },
    { id: "1647047292192", name: "500", lightness: "60" },
    { id: "1647047292410", name: "600", lightness: "48" },
    { id: "1647047292592", name: "700", lightness: "38" },
    { id: "1647047292810", name: "800", lightness: "29" },
    { id: "1647047293143", name: "900", lightness: "21" },
    { id: "1647047293358", name: "A400", lightness: "15" },
  ],
} as TRampsState;

export const rampsSlice = createSlice({
  name: "ramps",
  initialState,
  reducers: {
    addRamp(state: TRampsState, action: PayloadAction<TRamp>) {
      if (action.payload.name && action.payload.lightness) {
        state.list.push(action.payload);
      }
    },
    toggleRamps(state) {
      return {
        ...state,
        active: !state.active,
      };
    },
    resetRamps(state) {
      Object.assign(state, initialState);
    },
    updateRamp(state, action: PayloadAction<TRamp>) {
      const { id } = action.payload;
      let index = state.list.findIndex((ramp) => ramp.id === id);
      state.list[index] = action.payload;
    },
    updateRamps(state, action: PayloadAction<TRamp[]>) {
      return {
        ...state,
        list: action.payload,
      };
    },
    removeRamp(state, action: PayloadAction<TRampId>) {
      const updatedList = state.list.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        list: updatedList,
      };
    },
  },
});

export const selectRampList = (state: RootState) => {
  const sorted = [...state.ramp.list].sort(
    (a, b) => (parseInt(a.lightness, 10) < parseInt(b.lightness, 10) ? 1 : -1) // Sort by L Value
    // a.name.toLowerCase().localeCompare(b.name.toLowerCase()) // Sort by Name
  );
  return sorted;
};
export const selectRampActive = (state: RootState) => {
  return state.ramp.active;
};
export const selectRampById = (state: RootState, rampId: string) =>
  state.ramp.list.find((ramp) => ramp.id === rampId);
export const {
  addRamp,
  removeRamp,
  updateRamp,
  updateRamps,
  resetRamps,
  toggleRamps,
} = rampsSlice.actions;
export default rampsSlice.reducer;
