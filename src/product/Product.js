import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HOST } from '../api/client';
import defaultImage from '../assets/images/product.jpg';
import { addItem } from '../cart/api';

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const productImages = useSelector(state => state.products.productImages);
  const image = productImages.find((image) => image.attributes.viewable_id === Number(product.id))
  const addItemToCart = async (product) =>  {
    await dispatch(addItem(product));
    const element = document.getElementById(product.relationships.default_variant.data.id);
    element.scrollIntoView(true);
  }   

  return(
    <div className="col s12 m6 l3">
      <div className="card">
        <div className="card-image">
          <img src={ image ? HOST + image.attributes.styles[2].url : defaultImage } alt="product" />
          <button className="btn-floating btn-large halfway-fab waves-effect waves-light red sidenav-trigger show-on-large" 
            data-target="slide-out"
            onClick={() => addItemToCart(product)}>
            <i className="material-icons">shopping_cart</i>
          </button>
        </div>
        <div className="card-content">
          <span className="card-title grey-text text-darken-4 truncate">{product.attributes.name}</span>
          <div className="card-title card-action">{product.attributes.display_price}</div>
          <p className="truncate">{product.attributes.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Product;
