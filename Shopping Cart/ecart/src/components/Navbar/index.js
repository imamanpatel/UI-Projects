import React from "react";
import "./style.scss";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "../Home/index";
import Checkout from "../../container/Checkout/Checkout";
export class Navbar extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <nav className="nav">
          <div className="container">
            <div className="nav-wrapper">
              <ul className="right">
                <li>
                  <NavLink to="/">Home </NavLink>
                  <span className="line">|</span>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                  <span className="line">|</span>
                </li>
                <li>
                  <NavLink to="/shop">Shop</NavLink>
                  <span className="line">|</span>
                </li>
                <li>
                  <NavLink to="/help">Help</NavLink>
                </li>
                <li>
                  <NavLink to="/cart">
                    <button className="btn">
                      <FontAwesomeIcon icon={faShoppingCart} />
                      Your Cart<span>0</span>
                    </button>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <Switch>
            <Route exact path="/">
              <div>{<h1 style={{ clear: "both" }}>this is home</h1>}</div>
            </Route>
            <Route exact path="/about">
              <div>{<h1 style={{ clear: "both" }}>this is about</h1>}</div>
            </Route>
            <Route exact path="/shop">
              <div>{<h1 style={{ clear: "both" }}>this is shop</h1>}</div>
            </Route>
            <Route exact path="/help">
              <div>{<h1 style={{ clear: "both" }}>this is help</h1>}</div>
            </Route>
            <Route exact path="/cart">
              <div>
                <Checkout />
                {<h1 style={{ clear: "both" }}>this is cart</h1>}
              </div>
            </Route>
          </Switch>
        </nav>
      </BrowserRouter>
    );
  }
}
