import React from 'react';
import productImage from '../assets/images/product.jpg';

const Product = ({ product }) => {
  return(
      <div className="col s12 m6 l3">
        <div className="card">
          <div className="card-image">
            <img src={ productImage } alt="product" />
            <a className="btn-floating btn-large halfway-fab waves-effect waves-light red"><i className="material-icons">shopping_cart</i></a>
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
