import React from 'react';
import { useSelector } from 'react-redux';
import Product from './Product';
import Loading from '../components/Loading';
import useLoadingProducts from '../hooks/useLoadingProducts';
 
const ProductList = () => {
  const page = useSelector(state => state.products.page);
  const products = useSelector(state => state.products.products);
  const isEnding = useSelector(state => state.products.isEnding);
  const [isLoading, loadingProducts] = useLoadingProducts();

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
          onClick={() => loadingProducts(page)}>
          MORE
        </button>
      </div>
    </div>
  );
}

export default ProductList;
