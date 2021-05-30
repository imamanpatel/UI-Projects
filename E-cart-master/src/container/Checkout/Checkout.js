import React, { Component } from "react";
import { NavLink, BrowserRouter, Switch, Route } from "react-router-dom";
import ShoppingcartCard from "../ShoppingcartCard/ShoppingcartCard";
import "./Checkout.scss";
import PaymentMethodCard from "../Pymentmethodcard/PaymentMethodCard";
import ShippingDetailCard from "../ShippingdetailCard/ShippingDetailCard";
export default class Checkout extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <div className="subnav-wrapper">
            <ul className="sub-navbar">
              <li>
                <NavLink to="/checkout">1.Shopping Cart</NavLink>
              </li>
              <li>
                <NavLink to="/ship">2.Shipping Details</NavLink>
              </li>
              <li>
                <NavLink to="/pay">3.Payment Option</NavLink>
              </li>
            </ul>
          </div>

          <Switch>
            <Route exact path="/checkout">
              <ShoppingcartCard />
            </Route>
            <Route exact path="/ship">
              <ShippingDetailCard />
            </Route>
            <Route exact path="/pay">
              <PaymentMethodCard />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
