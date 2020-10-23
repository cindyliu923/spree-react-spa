import { createStore, applyMiddleware, combineReducers } from 'redux';
import productsReducer from './product/redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({ products: productsReducer });
const store = createStore(
  rootReducer, 
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;