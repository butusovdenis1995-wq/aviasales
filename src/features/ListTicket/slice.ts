import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  FilterState,
  TransferKey,
  TypeFilter,
} from "@features/ListTicket/types/types";

const initialState: FilterState = {
  pagination: 5,
  transfer: {
    all: false,
    nonstops: true,
    one: true,
    two: false,
    three: false,
  },
  sorted: {
    cheap: true,
    fast: false,
    optimal: false,
  },
};

export const filterTicketsSlice = createSlice({
  name: "qtyTrans",
  initialState,
  reducers: {
    toggleQtyTrans: (state, action: PayloadAction<TransferKey>) => {
      const trans = action.payload;
      if (trans === "all") {
        const newValue = !state.transfer[trans];
        Object.keys(state.transfer).forEach((item) => {
          state.transfer[item as TransferKey] = newValue;
        });
      }
      if (trans !== "all") {
        state.transfer[trans] = !state.transfer[trans];
        state.transfer["all"] = false;
      }
      if (
        !state.transfer["all"] &&
        !Object.values(state.transfer).slice(1, 5).includes(false)
      ) {
        state.transfer["all"] = true;
      }
    },
    changeFilterTicket: (state, action: PayloadAction<TypeFilter>) => {
      state.sorted.cheap = false;
      state.sorted.fast = false;
      state.sorted.optimal = false;
      state.sorted[action.payload] = true;
    },
    changePaginationCount: (state, action: PayloadAction<number>) => {
      const count = action.payload;
      state.pagination = count;
    },
  },
});
export const { toggleQtyTrans, changeFilterTicket, changePaginationCount } =
  filterTicketsSlice.actions;
export default filterTicketsSlice.reducer;
