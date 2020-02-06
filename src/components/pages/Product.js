/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import Header from "../core/Header";
import Footer from "../core/Footer";
import ProductList from "./ProductList";
import * as apiService from "../global/service";

export class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      products: []
    };
  }

  componentDidMount = () => {
    this.loadProduct();
  };

  loadProduct() {
    var params = "?page=2";
    apiService.getUserList(params).then(res => {
      // console.log("response ==>> ", res.data);
      // return false;
      this.setState({
        products: res.data.data,
        loading: false
      });
    });
  }

  render() {
    return (
      <div>
        <Header />
        {this.state.loading === true ? (
          <div className="cover-spin"></div>
        ) : (
          <div>
            <section className="section">
              <h2>Product List</h2>
              <ProductList products={this.state.products} />
            </section>
          </div>
        )}
        <Footer />
      </div>
    );
  }
}

export default Product;
