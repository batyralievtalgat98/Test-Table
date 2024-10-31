import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PageType } from "../types";
import { mockPages } from "@/constants/mockPages";

interface pagesSliceState {
    pages: PageType[];
}

const initialState: pagesSliceState = {
    pages: mockPages,
};

const pagesSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    updatePage: (state, action: PayloadAction<PageType>) => {
      const index = state.pages.findIndex(
        (page) => page.id === action.payload.id
      );
      if (index !== -1) {
        state.pages[index] = action.payload;
      }
    },
  },
});

export const { updatePage } = pagesSlice.actions;
export default pagesSlice.reducer;