import React, { Component } from "react";
import productData from "../data.json";
import "../CommonStyle.scss";
import "./style.scss";

export default class Summary extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="wrapper-summary">
            <h3>Summary</h3>
            <div className="hr-line-small"></div>
            <input
              type="text"
              placeholder="Enter Coupon Code"
              id="couponcode"
            />
            <button>Apply</button>
            <div className="hr-line-small"></div>
            <p>
              SUBTOTAL
              <span className="cost">Subtotal</span>
            </p>
            <p>
              SHIPPING
              <span className="cost">Shipping Fee</span>
            </p>
            <p>
              TAXES
              <span className="cost"> Tax</span>
            </p>
            <p>
              Discount
              <span className="cost"> Discount</span>
            </p>

            <div className="hr-line-small"></div>
            <p>
              TOTAL <span>Total price</span>
            </p>
          </div>
        </div>
      </>
    );
  }
}
