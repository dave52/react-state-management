import React, { useReducer, useEffect } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Products from "./Products";
import { Routes, Route } from "react-router-dom";
import Detail from "./Detail";
import Cart from "./Cart";
import Checkout from "./Checkout";
import { useCart } from "./cartContext";

export default function App() {
  const { dispatch } = useCart();

  return (
    <>
      <div className="content">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<h1>Welceome</h1>}></Route>
            <Route path="/:category" element={<Products />}></Route>
            <Route path="/:category/:id" element={<Detail />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route
              path="/checkout"
              element={<Checkout dispatch={dispatch} />}
            />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}
