// Actions
const CREATE_CART = 'spree-react-spa/cart/CREATE_CART';
const GET_CART = 'spree-react-spa/cart/GET_CART';

// Action Creators
export const cartCreated = (token) => ({ 
  type: CREATE_CART,
  token: token
});

export const cartGeted = (cartData, items) => ({ 
  type: GET_CART,
  cartData: cartData,
  items: items
});

const initialState = {
  token: '',
  cartData: {},
  items: []
}

// Reducer
export const cartReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CREATE_CART:
      return {
        ...state,
        token: action.token
      }
    case GET_CART:
      return {
        ...state,
        cartData: action.cartData, 
        items: action.items,
      }   
    default:
      return state
  }
}

export default cartReducer;
