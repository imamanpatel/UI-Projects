import React, { Component } from "react";
import productData from "../data";
import "./style.scss";
import "../CommonStyle.scss";
export default class SubSummary extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="wrapper-subsummary">
            <h2>Summary</h2>
            <div className="product-summary">
              <div className="p-img">
                <img src="#" alt="#" />
              </div>

              <div className="img-detail">
                <p>Product title</p>
                <p className="price">&#8377; Price</p>
              </div>
            </div>
            <div className="hr-line-small"></div>
            <div className="voucher">
              <select>
                <option>HAVE A VOUCHER</option>
                <option>HAVE A VOUCHER</option>
                <option>HAVE A VOUCHER</option>
              </select>
            </div>
            <div className="hr-line-small"></div>
            <div className="price-summary">
              <span>SUBTOTAL</span>
              <span className="money"> Subtotal</span>
              <br />
              <span>SHIPPING </span>
              <span className="money">Shipping fee</span>
              <br />
              <span>TAXES </span>
              <span className="money">Tax</span>
              <br />
              <span>Discount </span>
              <span className="money">Discount</span>
              <br />
              <div className="hr-line-small"></div>
              <span>TOTAL</span>
              <span className="money">Total Amount</span>
            </div>
          </div>
        </div>
      </>
    );
  }
}
