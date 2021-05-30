import React from "react";
import "./Confirmed.scss";
import { Link } from "react-router-dom";

class Confirmed extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="wrapper-confirmed">
          <div className="content">
            <h2 className="content-h2">Your Order has been placed</h2>
            <p className="content-p">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
              doloribus at, facere ipsam laboriosam hic.
            </p>
            <Link to="/" className="">
              <button className="btn">Continue Shopping</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Confirmed;
