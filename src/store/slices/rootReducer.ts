import { combineReducers } from 'redux';
import productsReducer from './productsSlice';
import pricePlansReducer from './pricePlansSlice';
import pagesReducer from './pagesSlice';

const rootReducer = combineReducers({
  products: productsReducer,
  pricePlans: pricePlansReducer,
  pages: pagesReducer,
});

export default rootReducer;