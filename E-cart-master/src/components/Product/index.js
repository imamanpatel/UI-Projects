import React, { Component } from "react";

import "../CommonStyle.scss";
import "./style.scss";

export default class Product extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="prod-detail fadeinanimation">
            <div className="img">
              <img src="#" alt="prod-img"></img>
            </div>

            <div className="info">
              <h2>Product Title</h2>
              <div className="hr-line"></div>
              <span>Price: &#8377;# </span>
              <select>
                <option>models</option>
              </select>
              <div className="hr-line"></div>
              <p>Product infp</p>
              <div className="hr-line-small"></div>
              <button className="btn">Add To Cart</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
