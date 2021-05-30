import React, { Component } from "react";
import CartDetails from "../../components/CartDetail/index";
import Summary from "../../components/Summary/index";

import "./ShoppingcartCard.scss";

export default class ShoppingcartCard extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="cart-wrapper">
            <CartDetails />
            <Summary />
          </div>
        </div>
      </>
    );
  }
}
