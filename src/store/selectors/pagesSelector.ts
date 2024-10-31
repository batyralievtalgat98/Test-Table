import { createSelector } from '@reduxjs/toolkit';
import { PageType } from '../types';

type PagesState = {
  pages: {
    pages: PageType[]
  };
};

export const pagesStateSelector = (
  state: PagesState,
): {pages: PageType[]} => state.pages;

export const getPagesSelector = createSelector(
  pagesStateSelector,
  (pagesState) => {
    return pagesState.pages;
  },
);