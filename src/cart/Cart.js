import React from 'react';
import { useDispatch } from 'react-redux';
import { setItemQuantity } from '../cart/api';

const Cart = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <li className="collection-item truncate">
      <span className="title">{ item.attributes.name }</span>
      <p className="valign-wrapper">
        <a href="#!" className="valign-wrapper">
          <i className="small material-icons center-align" 
            onClick={() => dispatch(setItemQuantity(item.id, item.attributes.quantity - 1))}>
            indeterminate_check_box
          </i> 
        </a>
        { item.attributes.quantity }
        <a href="#!" className="valign-wrapper">
          <i className="small material-icons center-align"
            onClick={() => dispatch(setItemQuantity(item.id, item.attributes.quantity + 1))}>
            add_box
          </i>
        </a>
      </p>
      <span className="badge">
        {item.attributes.display_total}
      </span>
    </li>
  );
}
  
export default Cart;
