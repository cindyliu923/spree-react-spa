import React from 'react';
import { useSelector } from 'react-redux';
import { HOST } from '../api/client';
import defaultImage from '../assets/images/product.jpg';

const Product = ({ product }) => {
  const productImages = useSelector(state => state.products.productImages);
  const image = productImages.find((image) => image['attributes'].viewable_id === Number(product.id))

  return(
      <div className="col s12 m6 l3">
        <div className="card">
          <div className="card-image">
            <img src={ image ? HOST + image['attributes'].styles[2].url : defaultImage } alt="product" />
            <a href="#" className="btn-floating btn-large halfway-fab waves-effect waves-light red"><i className="material-icons">shopping_cart</i></a>
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4 truncate">{product['attributes'].name}</span>
            <div className="card-title card-action">{product['attributes'].display_price}</div>
            <p className="truncate">{product['attributes'].description}</p>
          </div>
        </div>
      </div>
  )
}

export default Product;
