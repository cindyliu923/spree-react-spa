import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';
import { Provider } from 'react-redux';
import store from './reduxStore';
import Navbar from './components/Navbar';
import ProductList from './product/ProductList';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
        <div className="App">
          <Navbar />
          <ProductList />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
