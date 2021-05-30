import React, { Component } from "react";
import {
  NavLink,
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../CommonStyle.scss";
import "./style.scss";
export default class CartDetails extends Component {
  render() {
    return (
      <div className="container">
        <div className="wrapper-cartDetails">
          <h2>Shopping Cart</h2>
          {/* condition to render cart is empty */}
          <div className="pro-info">
            <img src="#" alt="#"></img>
            <div className="details">
              <span>Product NAme</span>
              <p>Product Info</p>
              <span className="pp">&#8377; Price</span>
            </div>
            <div className="btns">
              <button>
                <FontAwesomeIcon icon={faTrash} className="icon" />
              </button>
              <div className="qtys">
                <span>Quantity :</span>
                <input type="number" id="quantity" min="1" max="100" />
              </div>
            </div>
          </div>

          <>
            <button className="btn">Next</button>

            <button className="btn-light">Cancel</button>
          </>
        </div>
      </div>
    );
  }
}
