

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Homepage from "./pages/Homepage";
import ProductPage from "./pages/ProductPage";
import AddProd from "./pages/addprod";
import Register from "./pages/Register";
import ProductDetailPage from "./pages/ProductDetailPage";
import NavBar from './components/NavBar';
import ProductButton from "./components/ProdBtn.jsx";
import CartPage from "./pages/CartPage";

const App = () => (
  <Router>
    <NavBar />
    <ProductButton />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/add-product" element={<ProductPage />} />
      <Route path="/addprod" element={<AddProd />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/product/:id" element={<ProductDetailPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  </Router>
);

export default App;
