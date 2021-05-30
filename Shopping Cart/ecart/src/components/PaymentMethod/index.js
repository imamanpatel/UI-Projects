import React, { Component } from "react";
import "../CommonStyle.scss";
import "./style.scss";

export default class PaymentMethod extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="wrapper-paymentMethod">
            <h2>Payment method</h2>
            {/* <div className="hr-line"></div> */}
            <div className="cardDetails">
              <div className="card">
                <div className="cardType">
                  <input type="radio" name="paypal" />
                  <label for="card">
                    <span>Credit Card</span>
                    <span>
                      VISA / MASTERCARD / RUPAY / MAESTRO / AMERICAN EXPRESS
                    </span>
                  </label>
                </div>

                <div className="card-number">
                  <input
                    class="inputCard"
                    type="number"
                    min="1000"
                    max="9999"
                    name="creditCard1"
                    id="creditCard1"
                    placeholder="0000   0000   0000   0000"
                    required
                  />

                  <input
                    class="inputCard1"
                    name="expiry"
                    id="expiry"
                    type="month"
                    required
                  />
                  <input
                    type="number"
                    className="cv"
                    name="cvv"
                    id="cvv"
                    required
                  />

                  <input type="text" placeholder="Card Holder Name"></input>
                </div>
              </div>
              <div className="paypal">
                <input type="radio" name="paypal" />
                <label for="paypal">
                  <span>Paypal</span>
                  <span>lorem</span>
                </label>

                <div>
                  <a href="https://www.paypal.com/in/home" alt="paypall">
                    Paypal
                  </a>
                </div>
              </div>

              <button className="btn">Pay Now</button>
              <button className="btn-light">Cancel</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
