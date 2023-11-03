import {Link} from "react-router-dom";
import React from "react";

function NavigationBar() {
  return <>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <br/>
          <Link to="/product">Product</Link>
          <br/>
          <Link to="/cart">Cart</Link>
          <br/>
          <Link to="/checkout">Checkout</Link>
        </li>
        <li>
          <Link to="/nothing-here">Nothing Here</Link>
        </li>
      </ul>
    </nav>
    <hr/>
  </>
}


export default NavigationBar
