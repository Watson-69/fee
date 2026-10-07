import {BrowserRouter,Routes,Route} from "react-router-dom";
import React from 'react'
import Home from './pages/Home';
import Product from './pages/Product';
import Layout from './components/Layout';
import Product1 from './pages/Product1';
import Product2 from './pages/Product2';
import Product3 from './pages/Product3';
import P404 from './pages/P404';
import About from "./pages/About";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            <Route path="/products" element={<Product></Product>}>
                <Route index element={<Product1/>}/>
               <Route path='product2' element={<Product2/>}/>
                <Route path='product3' element={<Product3/>}/>
            </Route>
            <Route path="*" element={<P404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App

