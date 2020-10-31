import React from 'react';

const Cart = ({ item }) => {

  return (
    <li className="collection-item truncate">{ item.attributes.name } x { item.attributes.quantity }<span className="badge">{item.attributes.display_total}</span></li>
  );
}
  
export default Cart;