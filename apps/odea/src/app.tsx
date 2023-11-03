import React from "react";
import {Routes, Route, Link} from "react-router-dom";
import Home from "./pages/home/home";
import Layout from "./components/layout/layout";
import Product from "./pages/product/product";
import Cart from "./pages/cart/cart";
import Checkout from "./pages/checkout/checkout";


export function App() {
  // TODO: Add Styling
  // TODO: Copy Odea to this project
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>

        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path="*" element={<NoMatch/>}/>
      </Route>
    </Routes>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
        <Link to="/product">Go to the product page</Link>
      </p>
    </div>
  );
}

export default App;
