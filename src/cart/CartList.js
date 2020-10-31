import React from 'react';
import { useSelector } from 'react-redux';
import Cart from './Cart';

const CartList = () => {
  const cartData = useSelector(state => state.cart.cartData);
  const items = useSelector(state => state.cart.items);
  const hasCartItem = useSelector(state => state.cart.hasCartItem);

  return (
    <ul id="slide-out" className="container collection sidenav">
      {items.map(item => (
        <Cart key={item.id} item={item} />
      ))}
      <li className="collection-item truncate">
        <b>TOTAL { hasCartItem ? cartData.attributes.item_count : 0 }</b>
        <span className="badge">{ hasCartItem ? cartData.attributes.display_item_total : '$0' }</span>
      </li>
    </ul>

  );
}
  
export default CartList;

