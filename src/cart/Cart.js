import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, setItemQuantity } from '../cart/api';

const Cart = ({ item }) => {
  const dispatch = useDispatch();
  
  return (
    <li className="collection-item truncate">
      <span className="title">
        { item.attributes.name }
        <a href="#!" className="valign-wrapper secondary-content"
          onClick={() => dispatch(removeItem(item.id))}>
          <i className="material-icons">delete_forever</i>
        </a>
      </span>
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
