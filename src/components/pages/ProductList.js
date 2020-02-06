/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import * as apiService from "../global/service";

export class ProductList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("products ==>> ", this.props.products);
    let products;
    if (this.props.products) {
      products = this.props.products.map((product, index) => {
        return (
        <li key={index} className="list-group-item">
            <span><img width="50" alt="Product" src={product.avatar} /></span>
            <span>{product.email}</span>
        </li>
        );
      });
    }

    return (
      <div>
        <section className="section">
          <ul className="list-group">{products}</ul>
        </section>
      </div>
    );
  }
}

export default ProductList;
