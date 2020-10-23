import client from '../api/client';
import { productsload } from './redux';

export const loadProducts = (page = 1) => async dispatch => { 
  const result = await client.products.list({page: page, sort: '-updated_at'});
  return dispatch(productsload(result.success().data));
}

// export default loadProducts;
