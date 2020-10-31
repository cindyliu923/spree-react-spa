import { createStore, applyMiddleware, combineReducers } from 'redux';
import productsReducer from './product/redux';
import cartReducer from './cart/redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({ products: productsReducer, cart: cartReducer });
const store = createStore(
  rootReducer, 
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;