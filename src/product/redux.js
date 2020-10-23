// Actions
const LOAD_PRODUCTS = 'spree-rnapp/product/LOAD_PRODUCTS';

// Action Creators
export const productsload = products => ({ 
  type: LOAD_PRODUCTS, 
  products: products
});

const initialState = {
  products: [],
  page: 1
}

// Reducer
export const productsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return {
        products: state.products.concat(action.products),
        page: state.page + 1
      }
    default:
      return state
  }
}

export default productsReducer;
