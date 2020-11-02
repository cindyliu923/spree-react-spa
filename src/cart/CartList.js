import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './Cart';
import { emptyCart } from '../cart/api';

const CartList = () => {
  const dispatch = useDispatch();
  const cartData = useSelector(state => state.cart.cartData);
  const items = useSelector(state => state.cart.items);

  return (
    <ul id="slide-out" className="container collection sidenav">
      <h4 className="collection-item teal lighten-2 white-text">Cart List</h4>
      {items.map(item => (
        <Cart key={item.id} item={item} />
      ))}
      <li className="collection-item truncate">
        <b>
          TOTAL { (cartData.attributes || {}).item_count || 0 }
          <span className="badge">{ (cartData.attributes || {}).display_item_total || '$0' }</span>
        </b>
      </li>
      <a id="empty" href="#!" className="collection-item active #e53935 red darken-1" onClick={() => dispatch(emptyCart())}>Empty Cart</a>
    </ul>

  );
}
  
export default CartList;
