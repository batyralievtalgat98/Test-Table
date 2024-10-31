import { createSelector } from '@reduxjs/toolkit';
import { ProductType } from '../types';

type ProductsState = {
  products: {
    products: ProductType[]
  };
};

export const productsStateSelector = (
  state: ProductsState,
): {products: ProductType[]} => state.products;

export const getProductSelector = createSelector(
    productsStateSelector,
  (productsState) => {
    return productsState.products;
  },
);