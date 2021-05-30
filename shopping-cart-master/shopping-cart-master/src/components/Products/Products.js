import React from "react";

import { NavLink, BrowserRouter, Switch, Route } from "react-router-dom";
import "./Products.scss";
import "../CommonStyle.scss";

import data from "../data.json";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: data };
  }

  // componentDidMount() {
  //   fetch(`./data.json`, {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   })
  //     .then((response) => {
  //       return response.json();
  //     })

  //     .then((data) => {
  //       console.log(data);
  //       data = data.map(function (e, idx) {
  //         return {
  //           title: e["title"],
  //           price: e["price"],
  //           info: e["info"],
  //           image: e["img"],
  //         };
  //       });

  //       this.setState({ data: data });
  //     });
  // }

  filter = () => {
    let filter_txt = document.getElementById("search-box").value.toUpperCase();
    let blocks = document.getElementsByClassName("product-block");
    for (let i = 0; i < blocks.length; i++) {
      let name = blocks[i].innerText.split("\n")[0].toUpperCase();
      if (name.indexOf(filter_txt) > -1) blocks[i].style.display = "";
      else blocks[i].style.display = "none";
    }
  };

  render() {
    let ele = null,
      addToCart = this.props.addToCart,
      changeProduct = this.props.changeProduct;
    if (this.state.data) {
      ele = this.state.data.map(function (e, idx) {
        return (
          <div key={idx} className="product-block fadeinanimation">
            <div className="container">
              <div className="wrapper-pro">
                <div className="image">
                  <img
                    className="prod-img"
                    src={e["img"]}
                    alt={e["title"]}
                    align="left"
                  />

                  <div className="info-price">
                    <NavLink to="./ProductDetail">
                      <a
                        href="./ProductDetails"
                        className="pro-name"
                        onClick={() => {
                          changeProduct(e);
                        }}
                        id={e["id"]}
                      >
                        {e["title"]}
                      </a>
                    </NavLink>

                    <span>{e["info"]}</span>
                    <span class="price">&#8377;{e["price"][0]}</span>
                    <button
                      onClick={() => {
                        addToCart(e, 0);
                      }}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }
    return (
      <div className="container">
        <div className="product-container">
          <div className="search-box">
            <h1 className="slidefromtop">Mobile E-commerce Shop</h1>
            <div className="input-box slidefromtop">
              <input
                type="text"
                id="search-box"
                onKeyUp={this.filter}
                placeholder="Search..."
              />
              <button>Submit</button>
            </div>
          </div>
          <div className="products">
            <h2>Products Listing</h2>
            <p className="lead">
              Some of the devices that you can purchase from this shop.
            </p>
            <div className="product-wrapper">{ele}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Products;
