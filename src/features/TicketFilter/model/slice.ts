import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterTicket, TypeFilter } from "./types";

const initialState: FilterTicket = {
  cheap: true,
  fast: false,
  optimal: false,
};

export const FilterTicketReducer = createSlice({
  name: "filterTicket",
  initialState,
  reducers: {
    changeFilterTicket: (state, action: PayloadAction<TypeFilter>) => {
      state.cheap = false;
      state.fast = false;
      state.optimal = false;
      state[action.payload] = true;
    },
  },
});

export const { changeFilterTicket } = FilterTicketReducer.actions;
export default FilterTicketReducer.reducer;
