import { mockProducts } from "@/constants/mockProducts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../types";

interface productsSliceState {
  products: ProductType[];
}

const initialState: productsSliceState = {
  products: mockProducts,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateProduct: (state, action: PayloadAction<ProductType>) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
  },
});

export const { updateProduct } = productsSlice.actions;
export default productsSlice.reducer;

