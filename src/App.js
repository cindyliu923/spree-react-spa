import React, { useEffect } from 'react';
import M from 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';
import Navbar from './components/Navbar';
import ProductList from './product/ProductList';
import CartList from './cart/CartList';

const App = () => { 

  useEffect(() => {
    M.AutoInit();
  }, [])

  return (
    <div className="App">
      <Navbar />
      <CartList />
      <ProductList />
    </div>
  );
}

export default App;
