import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../product/api';
import Product from './Product';
 
const ProductList = () => {
  const dispatch = useDispatch();
  const page = useSelector(state => state.products.page);
  const products = useSelector(state => state.products.products);
  const diplayMoreBtn = useSelector(state => state.products.diplayMoreBtn);
  const style = {
    display: diplayMoreBtn
  }

  useEffect(() => {
    dispatch(loadProducts(1))
  }, [dispatch])

  return (
    <div>
      <div className="row container">
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
        
        <a className="col s12 m12 l12 waves-effect waves-light btn" style={style} onClick={() => dispatch(loadProducts(page))}>
          MORE
        </a>
      </div>
    </div>
  );
}

export default ProductList;
