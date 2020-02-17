/* eslint-disable no-unused-expressions */
import React, { Component, Fragment, Suspense } from "react";
import Header from "../core/Header";
import Footer from "../core/Footer";
import * as apiService from "../global/service";
import { Link } from "react-router-dom";

export class Cart extends Component {
  constructor(props) {
    super(props);
  }

  loading = () => <div className="cover-spin"></div>;

  render() {
    return (
      <div className="main-wrapper">
        <Header />
        <Fragment>
          <Suspense fallback={this.loading()}>
            <div className="innerbanner">
              <div className="container">
                <div className="row">
                  <h2>Oops! Page Not Found</h2>
                  <div className="col-12">
                    <ul className="breadcrumb-list">
                      <li className="breadcrumb-item active">
                        <Link to="/">Back To Home</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Suspense>
        </Fragment>
        <Footer />
      </div>
    );
  }
}

export default Cart;
