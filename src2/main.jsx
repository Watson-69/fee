import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import Product from './pages/Product';
import Layout from './components/Layout';
import Product1 from './pages/Product1';
import Product2 from './pages/Product2';
import Product3 from './pages/Product3';
import P404 from './pages/P404';
import { ProtectedRoutes } from './utils/ProtectedRoutes';
import App from './App';
import StoreApp from './StoreApp';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <app>
  <StoreApp></StoreApp>

    </app>
  </StrictMode>
);