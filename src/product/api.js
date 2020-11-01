import client from '../api/client';
import { productsLoad, productsLoadended, loading } from './redux';

export const loadProducts = (page = 1) => async dispatch => { 
  dispatch(loading());
  const result = await client.products.list({
    page: page, per_page: 20, include: 'images', sort: '-updated_at'
  });
  if (result.isSuccess() && result.success().data.length > 0) {
    return dispatch(productsLoad(result.success().data, result.success().included));
  } else {
    return dispatch(productsLoadended());
  }
}

// export default loadProducts;