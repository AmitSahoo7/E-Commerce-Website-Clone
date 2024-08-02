
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Footer from './components/Footer.jsx';
import './index.css';
import BackToTop from './components/BackToTop.jsx';
import { UserProvider, CartProvider } from './components/link.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <CartProvider>
        <App />
        <BackToTop />
        <Footer />
      </CartProvider>
    </UserProvider>
  </React.StrictMode>,
);
