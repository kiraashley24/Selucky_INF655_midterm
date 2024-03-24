// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Search from './components/Search';
import Cart from './components/Cart';
import { CartProvider } from './components/context/CartContext';
import ProductList from './pages/ProductList';

const App = () => {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productlist" element={ProductList} />
          <Route path="/search" element={Search} />
          <Route path="/cart" element={Cart} />
        </Routes>
      </CartProvider>
    </Router>
  );
};

export default App;
