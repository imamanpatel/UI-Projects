import React, { Component } from "react";
import ShippingDetails from "../../components/ShippingDetail/index";
import SubSummary from "../../components/SubSummary/index";
import "./ShippingDetailCard.scss";
import "../../components/CommonStyle.scss";
export default class ShippingDetailCard extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="ShippingDetailCard-wrapper">
            <ShippingDetails />
            <SubSummary />
          </div>
        </div>
      </>
    );
  }
}
