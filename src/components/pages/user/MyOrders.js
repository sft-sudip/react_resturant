import React, { Component, Fragment, Suspense } from "react";

export class MyOrders extends Component {
  constructor(props) {
    super(props);
  }

  loading = () => <div className="cover-spin"></div>;

  render() {
    return (
      <Fragment>
        <Suspense fallback={this.loading()}>
          <h3>Orders</h3>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Order</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Total</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Feb 24, 2020</td>
                  <td>Processing</td>
                  <td>225.00 for 1 item</td>
                  <td>
                    <a
                      className="btn btn-primary viewOrderBtn"
                      data-toggle="collapse"
                      href="#collapseExample"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      view
                    </a>
                    <a href="javascript:void(0)" className="view">
                      Re-Order
                    </a>
                  </td>
                </tr>

                <tr>
                  <td colspan="5">
                    <div className="collapse" id="collapseExample">
                      <div className="card card-body">
                        <div className="main-content-wrap cart-page">
                          <div className="container">
                            <div className="row">
                              <div className="col-12">
                                <form action="#" className="cart-table">
                                  <div className="table-content table-responsive">
                                    <table className="table">
                                      <thead>
                                        <tr>
                                          <th className="plantmore-product-thumbnail">
                                            Images
                                          </th>
                                          <th className="cart-product-name">
                                            Product
                                          </th>
                                          <th className="plantmore-product-price">
                                            Unit Price
                                          </th>
                                          <th className="plantmore-product-quantity">
                                            Quantity
                                          </th>
                                          <th className="plantmore-product-subtotal">
                                            Total
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
                                            <span className="amount">
                                              270.00
                                            </span>
                                          </td>
                                          <td className="plantmore-product-quantity">
                                            2
                                          </td>
                                          <td className="product-subtotal">
                                            <span className="amount">
                                              270.00
                                            </span>
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
                                            <span className="amount">
                                              560.50
                                            </span>
                                          </td>
                                          <td className="plantmore-product-quantity">
                                            1
                                          </td>
                                          <td className="product-subtotal">
                                            <span className="amount">
                                              560.50
                                            </span>
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
                                            <span className="amount">
                                              240.50
                                            </span>
                                          </td>
                                          <td className="plantmore-product-quantity">
                                            2
                                          </td>
                                          <td className="product-subtotal">
                                            <span className="amount">
                                              240.50
                                            </span>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                  <div className="row">
                                    <div className="col-md-8">
                                      <div className="coupon-all">
                                        <div className="coupon2">
                                          <h4>Order Status</h4>
                                          <p>Pending</p>

                                          <h4>Delivery Address</h4>

                                          <p>
                                            Akshya Nagar 1st Block 1st Cross,
                                            Rammurthy nagar, Bangalore-560016
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-4 ml-auto">
                                      <div className="cart-page-total">
                                        <h2>Totals</h2>
                                        <ul>
                                          <li>
                                            Subtotal
                                            <span>2170.00</span>
                                          </li>
                                          <li>
                                            Total
                                            <span>2170.00</span>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>Feb 24, 2020</td>
                  <td>Processing</td>
                  <td>417.00 for 1 item</td>
                  <td>
                    <a className="btn btn-primary viewOrderBtn">view</a>
                    <a href="javascript:void(0)" className="view">
                      Re-Order
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Suspense>
      </Fragment>
    );
  }
}

export default MyOrders;
