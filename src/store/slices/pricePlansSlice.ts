
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PricePlanType } from "../types";
import { mockPricePlans } from '@/constants/mockPricePlans';

interface pricePlansSliceState {
    pricePlans: PricePlanType[];
}

const initialState: pricePlansSliceState = {
    pricePlans: mockPricePlans,
};

const pricePlansSlice = createSlice({
  name: "pricePlans",
  initialState,
  reducers: {
    updatePricePlan: (state, action: PayloadAction<PricePlanType>) => {
      const index = state.pricePlans.findIndex(
        (pricePlan) => pricePlan.id === action.payload.id
      );
      if (index !== -1) {
        console.log('action.payload',action.payload);
        state.pricePlans[index] = action.payload;
      }
    },
  },
});

export const { updatePricePlan } = pricePlansSlice.actions;
export default pricePlansSlice.reducer;