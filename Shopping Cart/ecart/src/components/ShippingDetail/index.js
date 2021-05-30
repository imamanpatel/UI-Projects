import React, { Component } from "react";
import "../CommonStyle.scss";
import "./style.scss";

export default class ShippingDetails extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="wrapper-shipping">
            <h2>Shipping Details</h2>
            <form action="#" id="shipform">
              <input
                type="text"
                className="name"
                name="firstname"
                id="firstname"
                placeholder="First Name"
                required
              />
              <input
                type="text"
                className="name"
                name="lastname"
                id="lastname"
                placeholder="Last Name"
                required
              />
              <br />
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Address Line 1"
              />
              <br />
              <input
                type="text"
                name="address2"
                id="address2"
                placeholder="Address Line 2"
              />
              <br />
              <select name="country">
                <option value="">Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="Australia">Australia</option>
                <option value="Thailand">Thailand</option>
              </select>
              <input type="text" id="city" name="city" placeholder="City" />
              <br />
              <input
                type="number"
                id="zip"
                name="zip"
                placeholder="Zip/Postal Code"
              />
              <input
                type="number"
                id="phone"
                name="phone"
                placeholder="Phone Number"
              />
              <div className="hr-line"></div>
              <div className="radios">
                <div className="free-shipping">
                  <input
                    type="radio"
                    name="shippingType"
                    value="Free Shipping"
                  />
                  <div className="free">
                    <label for="free-shipping">
                      <p>Free Shipping</p>
                      <p class="delivery-type">between 2-5 working days</p>
                    </label>
                  </div>
                </div>
                <div className="next-day">
                  <input
                    type="radio"
                    name="shippingType"
                    value="Paid Shipping"
                  />
                  <div className="next">
                    <label for="next-day">
                      <p>Next Day Delivery - $20</p>
                      <p class="delivery-type">24 hours from checkout</p>
                    </label>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn">
                Next
              </button>
              <button className="btn-light">Cancel</button>
            </form>
          </div>
        </div>
      </>
    );
  }
}
