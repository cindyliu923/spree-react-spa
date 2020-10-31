// Actions
const CREATE_CART = 'spree-rnapp/cart/CREATE_CART';
const GET_CART = 'spree-rnapp/cart/GET_CART';
const ADD_CART = 'spree-rnapp/cart/ADD_CART';
const OPEN_CART = 'spree-rnapp/cart/OPEN_CART';

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

export const cartOpened = (open) => ({ 
  type: OPEN_CART,
  openCart: !open
});

const initialState = {
  token: '',
  cartData: {},
  items: [],
  openCart: false
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
