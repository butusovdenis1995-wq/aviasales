import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { FilterState, TransferKey } from "./types";

const initialState: FilterState = {
  transfer: {
    all: false,
    nonstops: true,
    one: true,
    two: false,
    three: false,
  },
};

export const qtyTransSlice = createSlice({
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
  },
});
export const { toggleQtyTrans } = qtyTransSlice.actions;
export default qtyTransSlice.reducer;
