import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import M from 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';
import { Provider } from 'react-redux';
import store from './reduxStore';
import Navbar from './components/Navbar';
import ProductList from './product/ProductList';
import CartList from './cart/CartList';

const App = () => { 

  useEffect(() => {
    M.AutoInit();
  }, [])

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <CartList />
          <ProductList />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
