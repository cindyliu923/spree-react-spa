import client from '../api/client';
import { cartCreated, cartGeted } from './redux';

export const getCart = () => async (dispatch, getState) => {
  const token = getState().cart.token;
  if (token !== '') return dispatch(cartList(token));

  return dispatch(createCart());
}

export const checkToken = () => async (dispatch, getState) => {
  const token = getState().cart.token;
  if (token === '') return await dispatch(createCart());
  return token;
}

export const addItem = product => async dispatch => { 
  const token = await dispatch(checkToken()); 
  const result = await client.cart.addItem(
    { orderToken: token }, 
    {
      include: 'line_items',
      variant_id: product.relationships.default_variant.data.id,
      quantity: 1
    }
  )

  if (result.isSuccess()) {
    return dispatch(cartGeted(result.success().data, result.success().included));
  }
}

export const createCart = () => async dispatch => { 
  const result = await client.cart.create()

  if (result.isSuccess()) {
    localStorage.setItem('token', result.success().data.attributes.token);
    dispatch(cartCreated(result.success().data.attributes.token));
    return result.success().data.attributes.token;
  }
}

export const cartList = (token) => async dispatch => {
  const result = await client.cart.show({ orderToken: token }, { include: 'line_items' })

  if (result.isSuccess()) {
    return dispatch(cartGeted(result.success().data, result.success().included));
  }
}

export const emptyCart = () => async dispatch => { 
  const token = await dispatch(checkToken()); 
  const result = await client.cart.emptyCart({ orderToken: token }, { include: 'line_items' });
  if (result.isSuccess()) {
    return dispatch(cartGeted(result.success().data, result.success().included));
  }  
}

export const removeItem = (id) => async dispatch => { 
  const token = await dispatch(checkToken()); 
  const result = await client.cart.removeItem({ orderToken: token }, id)

  if (result.isSuccess()) {
    return dispatch(getCart());
  }  
}

export const setItemQuantity = (id, quantity) => async dispatch => { 
  if (quantity <= 0) return await dispatch(removeItem(id));

  const token = await dispatch(checkToken()); 
  const result = await client.cart.setQuantity({ orderToken: token }, { 
    line_item_id: id,
    quantity: quantity,
    include: 'line_items'
  });
  if (result.isSuccess()) {
    return dispatch(cartGeted(result.success().data, result.success().included));
  }  
}
