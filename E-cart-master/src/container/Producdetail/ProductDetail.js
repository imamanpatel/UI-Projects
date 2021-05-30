import React, { Component } from "react";
import Product from "../../components/Product/index";
import Reviews from "../../components/Review/index";
export default class ProductDetails extends Component {
  render() {
    return (
      <div className="wrapper-productDetail">
        <Product />
        <Reviews />
      </div>
    );
  }
}
