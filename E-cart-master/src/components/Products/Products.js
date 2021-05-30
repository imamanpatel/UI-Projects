import React from "react";

import { NavLink, BrowserRouter, Switch, Route } from "react-router-dom";
import "./Products.scss";
import "../CommonStyle.scss";

import data from "../data.json";

class Products extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="product-container">
          <div className="search-box">
            <h1 className="slidefromtop">Mobile E-commerce Shop</h1>
            <div className="input-box slidefromtop">
              <input type="text" id="search-box" placeholder="Search..." />
              <button>Submit</button>
            </div>
          </div>
          <div className="products">
            <h2>Products Listing</h2>
            <p className="lead">
              Some of the devices that you can purchase from this shop.
            </p>
            <div className="product-wrapper">
              <div className="product-block fadeinanimation">
                <div className="container">
                  <div className="wrapper-pro">
                    <div className="image">
                      <img className="prod-img" align="left" />

                      <div className="info-price">
                        <NavLink to="#">
                          <a href="#" className="pro-name">
                            Product title
                          </a>
                        </NavLink>

                        <span>Product info</span>
                        <span class="price">&#8377;</span>
                        <button>Add To Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Products;
