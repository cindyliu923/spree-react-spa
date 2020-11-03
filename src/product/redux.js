// Actions
const LOAD_PRODUCTS = 'spree-react-spa/product/LOAD_PRODUCTS';
const LOAD_PRODUCTS_ENDED = 'spree-react-spa/product/LOAD_PRODUCTS_ENDED';

// Action Creators
export const productsLoad = (products, images) => ({ 
  type: LOAD_PRODUCTS, 
  products: products,
  productImages: images
});

export const productsLoadended = () => ({ 
  type: LOAD_PRODUCTS_ENDED
});

const initialState = {
  products: [],
  productImages: [],
  page: 1,
  isEnding: false
}

// Reducer
export const productsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return {
        products: state.products.concat(action.products),
        productImages: state.productImages.concat(action.productImages),
        page: state.page + 1,
        isEnding: false
      }
    case LOAD_PRODUCTS_ENDED:
      return {
        ...state,
        isEnding: true
      }
    default:
      return state
  }
}

export default productsReducer;
