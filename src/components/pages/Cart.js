/* eslint-disable no-unused-expressions */
import React, { Component, Fragment, Suspense } from "react";
import Header from "../core/Header";
import Footer from "../core/Footer";
import * as apiService from "../global/service";

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
                  <h2>Cart</h2>
                  <div className="col-12">
                    <ul className="breadcrumb-list">
                      <li className="breadcrumb-item">
                        <a href="javascript:void(0)">Home</a>
                      </li>
                      <li className="breadcrumb-item active">Cart</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="main-content-wrap section-ptb cart-page">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <form className="cart-table">
                      <div className="table-content table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th className="plantmore-product-thumbnail">
                                Images
                              </th>
                              <th className="cart-product-name">Product</th>
                              <th className="plantmore-product-price">
                                Unit Price
                              </th>
                              <th className="plantmore-product-quantity">
                                Quantity
                              </th>
                              <th className="plantmore-product-subtotal">
                                Total
                              </th>
                              <th className="plantmore-product-remove">
                                Remove
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="plantmore-product-thumbnail">
                                <a href="javascript:void(0)">
                                  <img
                                    src="images/meals/s-img-1.jpg"
                                    alt="food"
                                  />
                                </a>
                              </td>
                              <td className="plantmore-product-name">
                                <a href="javascript:void(0)">
                                  Compete Track Tote
                                </a>
                              </td>
                              <td className="plantmore-product-price">
                                <span className="amount">270.00</span>
                              </td>
                              <td className="plantmore-product-quantity">
                                <input value="1" type="number" />
                              </td>
                              <td className="product-subtotal">
                                <span className="amount">270.00</span>
                              </td>
                              <td className="plantmore-product-remove">
                                <a href="javascript:void(0)">
                                  <i
                                    className="fa fa-trash-o"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="plantmore-product-thumbnail">
                                <a href="javascript:void(0)">
                                  <img
                                    src="images/meals/s-img-2.jpg"
                                    alt="food"
                                  />
                                </a>
                              </td>
                              <td className="plantmore-product-name">
                                <a href="javascript:void(0)">
                                  Vestibulum suscipit
                                </a>
                              </td>
                              <td className="plantmore-product-price">
                                <span className="amount">560.50</span>
                              </td>
                              <td className="plantmore-product-quantity">
                                <input value="1" type="number" />
                              </td>
                              <td className="product-subtotal">
                                <span className="amount">560.50</span>
                              </td>
                              <td className="plantmore-product-remove">
                                <a href="javascript:void(0)">
                                  <i
                                    className="fa fa-trash-o"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="plantmore-product-thumbnail">
                                <a href="javascript:void(0)">
                                  <img
                                    src="images/meals/s-img-3.jpg"
                                    alt="food"
                                  />
                                </a>
                              </td>
                              <td className="plantmore-product-name">
                                <a href="javascript:void(0)">
                                  suscip dictum magna
                                </a>
                              </td>
                              <td className="plantmore-product-price">
                                <span className="amount">240.50</span>
                              </td>
                              <td className="plantmore-product-quantity">
                                <input value="1" type="number" />
                              </td>
                              <td className="product-subtotal">
                                <span className="amount">240.50</span>
                              </td>
                              <td className="plantmore-product-remove">
                                <a href="javascript:void(0)">
                                  <i
                                    className="fa fa-trash-o"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="row">
                        <div className="col-md-8">
                          <div className="coupon-all">
                            <div className="coupon2">
                              {/* <input
                                className="submit"
                                name="update_cart"
                                value="Update cart"
                                type="submit"
                              /> */}
                              <a
                                href="javascript:void(0)"
                                className=" continue-btn"
                              >
                                Continue Shopping
                              </a>
                            </div>

                            {/* <div className="coupon">
                              <h3>Coupon</h3>
                              <p>Enter your coupon code if you have one.</p>
                              <input
                                id="coupon_code"
                                className="input-text"
                                name="coupon_code"
                                value=""
                                placeholder="Coupon code"
                                type="text"
                              />
                              <input
                                className="button"
                                name="apply_coupon"
                                value="Apply coupon"
                                type="submit"
                              />
                            </div> */}
                          </div>
                        </div>
                        <div className="col-md-4 ml-auto">
                          <div className="cart-page-total">
                            <h2>Cart totals</h2>
                            <ul>
                              <li>
                                Subtotal <span>2170.00</span>
                              </li>
                              <li>
                                Total <span>2170.00</span>
                              </li>
                            </ul>
                            <a
                              href="javascript:void(0)"
                              className="proceed-checkout-btn"
                            >
                              Proceed to checkout
                            </a>
                          </div>
                        </div>
                      </div>
                    </form>
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
