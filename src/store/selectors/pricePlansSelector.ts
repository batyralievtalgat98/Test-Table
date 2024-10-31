import { createSelector } from '@reduxjs/toolkit';
import { PricePlanType } from '../types';

type PricePlansState = {
  pricePlans: {
    pricePlans: PricePlanType[]
  };
};

export const productsStateSelector = (
  state: PricePlansState,
): {pricePlans: PricePlanType[]} => state.pricePlans;

export const getPricePlansSelector = createSelector(
  productsStateSelector,
  (productsState) => {
    return productsState.pricePlans;
  },
);