import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../product/api';
import Product from './Product';
import Loading from '../components/Loading';
 
const ProductList = () => {
  const dispatch = useDispatch();
  const page = useSelector(state => state.products.page);
  const products = useSelector(state => state.products.products);
  const isEnding = useSelector(state => state.products.isEnding);
  const isLoading = useSelector(state => state.products.isLoading);

  useEffect(() => {
    dispatch(loadProducts(1))
  }, [dispatch])

  return (
    <div>
      <div className="row container">       
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
        <Loading style={isLoading ? { display: 'block' } : { display: 'none' }}/> 
        <button 
          style={isLoading || isEnding ? { display: 'none' } : { display: 'block' }} 
          className="col s12 m12 l12 waves-effect waves-light btn" 
          onClick={() => dispatch(loadProducts(page))}>
          MORE
        </button>
      </div>
    </div>
  );
}

export default ProductList;
