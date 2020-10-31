import React from 'react';
import { useSelector } from 'react-redux';
import Cart from './Cart';

const CartList = () => {
  const cartData = useSelector(state => state.cart.cartData);
  const items = useSelector(state => state.cart.items);

  return (
    <ul id="slide-out" className="container collection sidenav">
      <h4 className="collection-item teal lighten-2 white-text">Cart List</h4>
      {items.map(item => (
        <Cart key={item.id} item={item} />
      ))}
      <li className="collection-item truncate">
        <b>TOTAL { (cartData.attributes || {}).item_count }</b>
        <span className="badge">{ (cartData.attributes || {}).display_item_total }</span>
      </li>
    </ul>

  );
}
  
export default CartList;

