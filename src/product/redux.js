// Actions
const LOAD_PRODUCTS = 'spree-rnapp/product/LOAD_PRODUCTS';
const LOAD_PRODUCTS_ENDED = 'spree-rnapp/product/LOAD_PRODUCTS_ENDED';
const LOADING = 'spree-rnapp/product/LOADING';

// Action Creators
export const productsLoad = (products, images) => ({ 
  type: LOAD_PRODUCTS, 
  products: products,
  productImages: images,
  isLoading: false
});

export const productsLoadended = () => ({ 
  type: LOAD_PRODUCTS_ENDED
});

export const loading = () => ({ 
  type: LOADING
});

const initialState = {
  products: [],
  productImages: [],
  isLoading: false,
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
        isLoading: false,
        page: state.page + 1,
        isEnding: false
      }
    case LOAD_PRODUCTS_ENDED:
      return {
        ...state,
        isLoading: false,
        isEnding: true
      }
    case LOADING:
      return {
        ...state,
        isLoading: true        
      }
    default:
      return state
  }
}

export default productsReducer;
