import client from '../api/client';
import { cartCreated, cartGeted, cartAdded } from './redux';

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
    dispatch(cartGeted(result.success().data, result.success().included));
    return dispatch(cartAdded());
  }
}

export const createCart = () => async dispatch => { 
  const result = await client.cart.create()

  if (result.isSuccess()) {
    dispatch(cartCreated(result.success().data.attributes.token));
    return result.success().data.attributes.token
  }
}

export const cartList = (token) => async dispatch => {
  const result = await client.cart.show({ orderToken: token }, { include: 'line_items' })

  if (result.isSuccess()) {
    console.log(result.success());
    return dispatch(cartGeted(result.success().data, result.success().included));
  }
}

// export default loadProducts;