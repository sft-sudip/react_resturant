import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloggedin: localStorage.getItem("isloggedin") === "true" ? true : false
    };
  }

  isActive = (history, path) => {
    if (history.location.pathname === path) {
      return "active";
    } else {
      return "inactive";
    }
  };

  render() {
    let { history } = this.props;
    return (
      <Fragment>
        {/* <header>
          <div className="header">
            {this.state.isloggedin ? (
              <h2 style={this.isActive(history, "/")}>Header With Login</h2>
            ) : (
              <h2 style={this.isActive(history, "/signin")}>Header Without Login</h2>
            )}
          </div>
        </header> */}
        <header className="header">
          <div className="haeader-mid-area  border-bm-gray d-none d-lg-block ">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7 col-md-5 col-5">
                  <div className="logo-area">
                    <Link to="/">
                      <img src="images/logo.jpg" alt="" />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="customer-wrap">
                    <div className="single-costomer-box">
                      <div className="single-costomer">
                        <p>
                          <i className="fa fa-truck" aria-hidden="true"></i>
                          <span>Free Delivery</span>
                        </p>
                      </div>
                    </div>
                    <div className="single-costomer-box">
                      <div className="single-costomer">
                        <p>
                          <i className="fa fa-lock" aria-hidden="true"></i>
                          <span>Safe Payment</span>
                        </p>
                      </div>
                    </div>
                    <div className="single-costomer-box">
                      <div className="single-costomer">
                        <p>
                          <i className="fa fa-life-ring" aria-hidden="true"></i>
                          <span>24/7 Support</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="haeader-bottom-area bg-white header-sticky">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-9 d-none d-lg-block">
                  <div className="main-menu-area">
                    <nav className="main-navigation">
                      <ul>
                        <li className={this.isActive(history, "/")}>
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <a href="javascript:void(0)">ABOUT US</a>
                        </li>
                        <li className={this.isActive(history, "/menu")}>
                          <Link to="/menu">MENU</Link>
                        </li>
                        <li>
                          <a href="javascript:void(0)">My Account</a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">login &amp; register</a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">Contact</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-5 col-md-6 d-block d-lg-none">
                  <div className="logo">
                    <a href="javascript:void(0)">
                      <img src="images/logo-2.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-7">
                  <div className="right-blok-box d-flex">
                    <div className="shopping-cart-wrap">
                      <a href="javascript:void(0)">
                        <i
                          className="fa fa-shopping-bag"
                          aria-hidden="true"
                        ></i>
                        <span className="cart-total">2</span>
                        <span className="cart-total-amunt">0.00</span>
                      </a>
                      <ul className="mini-cart">
                        <li className="cart-item">
                          <div className="cart-image">
                            <a href="javascript:void(0)">
                              <img
                                alt=""
                                src="images/product/product-01.jpg "
                              />
                            </a>
                          </div>
                          <div className="cart-title">
                            <a href="javascript:void(0)">
                              <h4>Product Name 01</h4>
                            </a>
                            <div className="quanti-price-wrap">
                              <span className="quantity">1 ×</span>
                              <div className="price-box">
                                <span className="new-price">130.00</span>
                              </div>
                            </div>
                            <a
                              className="remove_from_cart"
                              href="javascript:void(0)"
                            >
                              <i className="fa fa-trash-o"></i>
                            </a>
                          </div>
                        </li>
                        <li className="cart-item">
                          <div className="cart-image">
                            <a href="javascript:void(0)">
                              <img alt="" src="images/product/product-02.jpg" />
                            </a>
                          </div>
                          <div className="cart-title">
                            <a href="javascript:void(0)">
                              <h4>Product Name 03</h4>
                            </a>
                            <div className="quanti-price-wrap">
                              <span className="quantity">1 ×</span>
                              <div className="price-box">
                                <span className="new-price">130.00</span>
                              </div>
                            </div>
                            <a
                              className="remove_from_cart"
                              href="javascript:void(0)"
                            >
                              <i className="fa fa-trash-o"></i>
                            </a>
                          </div>
                        </li>
                        <li className="subtotal-box">
                          <div className="subtotal-title">
                            <h3>Sub-Total :</h3>
                            <span> 260.99</span>
                          </div>
                        </li>
                        <li className="mini-cart-btns">
                          <div className="cart-btns">
                            <a href="javascript:void(0)">View cart</a>
                            <a href="javascript:void(0)">Checkout</a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="mobile-menu-btn d-block d-lg-none">
                      <div className="off-canvas-btn">
                        <a href="javascript:void(0)">
                          <img src="images/icon/bg-menu-block.png" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside className="off-canvas-wrapper">
            <div className="off-canvas-overlay"></div>
            <div className="off-canvas-inner-content">
              <div className="btn-close-off-canvas">
                <i className="icon-x"></i>
              </div>
              <div className="off-canvas-inner">
                <div className="search-box-offcanvas">
                  <form>
                    <input type="text" placeholder="Search product..." />
                    <button className="search-btn">
                      <i className="icon-search"></i>
                    </button>
                  </form>
                </div>

                <div className="mobile-navigation">
                  <nav>
                    <ul className="mobile-menu">
                      <li className="menu-item-has-children">
                        <a href="javascript:void(0)">Home</a>
                        <ul className="dropdown">
                          <li>
                            <a href="javascript:void(0)">Home Page 1</a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">Home Page 2</a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">Home Page 3</a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">Home Page 4</a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">Home Page 5</a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">Home Page 6</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="javascript:void(0)">Shop</a>
                        <ul className="megamenu dropdown">
                          <li className="mega-title has-children">
                            <a href="javascript:void(0)">Shop Layouts</a>
                            <ul className="dropdown">
                              <li>
                                <a href="javascript:void(0)">
                                  Shop Left Sidebar
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  Shop Right Sidebar
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  Shop List Left Sidebar
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  Shop List Right Sidebar
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Shop Full Width</a>
                              </li>
                            </ul>
                          </li>
                          <li className="mega-title has-children">
                            <a href="javascript:void(0)">Product Details</a>
                            <ul className="dropdown">
                              <li>
                                <a href="javascript:void(0)">
                                  Single Product Details
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  Variable Product Details
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  External Product Details
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  Gallery Product Details
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="mega-title has-children">
                            <a href="javascript:void(0)">Shop Pages</a>
                            <ul className="dropdown">
                              <li>
                                <a href="javascript:void(0)">Error 404</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Compare Page</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Cart Page</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Checkout Page</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Wish List Page</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children ">
                        <a href="javascript:void(0)">Blog</a>
                        <ul className="dropdown">
                          <li>
                            <a href="javascript:void(0)">Blog Left Sidebar</a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">Blog Right Sidebar</a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">Blog Grid Page</a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">Blog Large Image</a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">Blog Details Page</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children ">
                        <a href="javascript:void(0)">Pages</a>
                        <ul className="dropdown">
                          <li>
                            <a href="javascript:void(0)">FAQ</a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">My Account</a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">
                              login &amp; register
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="javascript:void(0)">About Us</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>

                <div className="header-top-settings offcanvas-curreny-lang-support">
                  <h5>My Account</h5>
                  <ul className="nav align-items-center">
                    <li className="language">
                      English <i className="fa fa-angle-down"></i>
                      <ul className="dropdown-list">
                        <li>
                          <a href="javascript:void(0)">English</a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">French</a>
                        </li>
                      </ul>
                    </li>
                    <li className="curreny-wrap">
                      Currency <i className="fa fa-angle-down"></i>
                      <ul className="dropdown-list curreny-list">
                        <li>
                          <a href="javascript:void(0)">$ USD</a>
                        </li>
                        <li>
                          <a href="javascript:void(0)"> € EURO</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <div className="offcanvas-widget-area">
                  <div className="top-info-wrap text-left text-black">
                    <h5>My Account</h5>
                    <ul className="offcanvas-account-container">
                      <li>
                        <a href="javascript:void(0)">My account</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Cart</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Wishlist</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Checkout</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </header>
      </Fragment>
    );
  }
}

export default withRouter(Header);
