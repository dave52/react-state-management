import React, { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Products from "./Products";
import { Routes, Route } from "react-router-dom";
import Detail from "./Detail";
import Cart from "./Cart";

export default function App() {
  const [cart, setCart] = useState([]);

  // we will pass the function down via props to Details component
  function addToCart(id, sku) {
    setCart((items) => {
      const itemsInCart = items.find((i) => i.sku === sku);
      // itemsInCart.quantity++; // DONT DO THIS,as need to treat state as immutable

      if (itemsInCart) {
        // return new array with the matching item replaced
        // whatever we return in setCart becomes the new state for the cart
        return items.map((i) =>
          i.sku === sku ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        // return new array with the new item appended
        // note for id and sku were using the object shorthand syntax which if its the same you don't need to specify the value for prop
        return [...items, { id, sku, quantity: 1 }];
      }
    });
  }

  function updateQuantity(sku, quantity) {
    setCart((items) => {
      const
    });
  }

  return (
    <>
      <div className="content">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<h1>Welceome</h1>}></Route>
            <Route path="/:category" element={<Products />}></Route>
            <Route
              path="/:category/:id"
              element={<Detail addToCart={addToCart} />}
            ></Route>
            <Route
              path="/cart"
              element={<Cart cart={cart} updateQuantity={updateQuantity} />}
            ></Route>
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}