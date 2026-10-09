import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Home from './pages/Home';
import About from "./pages/About";
import StoreApp from "./StoreApp";
import { Products } from "./pages/Products";
import { ProductList } from "./pages/ProductList";
import Layout from "./components/Layout";
import P404 from './pages/P404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main layout wrapper */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          
          <Route path="/products" element={<Products />}>
            <Route index element={<p>Products</p>} />
            <Route path=":category" element={<ProductList />} />
          </Route>

          {/* Inventory now renders inside the main layout */}
          <Route path="/inventory" element={<StoreApp />} />
        </Route>

        <Route path="/login" element={<h2>Login</h2>} />
        <Route path="*" element={<P404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;