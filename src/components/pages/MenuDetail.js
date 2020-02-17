/* eslint-disable no-unused-expressions */
import React, { Component, Fragment, Suspense } from "react";
import Header from "../core/Header";
import Footer from "../core/Footer";
import * as apiService from "../global/service";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export class MenuDetail extends Component {
  constructor(props) {
    super(props);
  }

  loading = () => <div className="cover-spin"></div>;

  render() {
    const menuDetailSliderSettings = {
      customPaging: function(i) {
        return (
          <a>
            <img src={`images/homebanner${i + 1}.jpg`} />
          </a>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const settingsRelatedProducts = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 8,
      slidesToScroll: 8
    };

    return (
      <div className="main-wrapper">
        <Header />
        <Fragment>
          <Suspense fallback={this.loading()}>
            <div className="innerbanner">
              <div className="container">
                <div className="row">
                  <h2>Menu Details</h2>
                  <div className="col-12">
                    <ul className="breadcrumb-list">
                      <li className="breadcrumb-item">
                        <a href="javascript:void(0)" alt="menu-details">
                          Home
                        </a>
                      </li>
                      <li className="breadcrumb-item active">Menu Details</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="main-content-wrap shop-page section-ptb">
              <div className="container">
                <div className="row single-product-area product-details-inner">
                  <div className="col-lg-5 menuDetailSliderDiv col-md-6">
                    <Slider {...menuDetailSliderSettings}>
                      <div className="pro-large-img img-zoom">
                        <img src="images/homebanner1.jpg" alt="menu-details" />
                      </div>
                      <div className="pro-large-img img-zoom">
                        <img src="images/homebanner2.jpg" alt="menu-details" />
                      </div>
                      <div className="pro-large-img img-zoom">
                        <img src="images/homebanner3.jpg" alt="menu-details" />
                      </div>
                    </Slider>
                  </div>

                  <div className="col-lg-7 col-md-6">
                    <div className="product-details-view-content">
                      <div className="product-info">
                        <h3>Dal Makhni Rice Box</h3>

                        <div className="price-box">
                          <span className="new-price">370.00</span>
                          <span className="old-price">378.00</span>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nam fringilla augue nec est tristique auctor.
                          Donec non est at libero vulputate rutrum. Morbi ornare
                          lectus quis justo gravida semper. Nulla tellus mi,
                          vulputate adipiscing cursus eu, suscipit id
                          nulla.Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Nam fringilla augue nec est tristique
                          auctor. Donec non est at libero vulputate rutrum.
                          Morbi ornare lectus quis justo gravida semper. Nulla
                          tellus mi, vulputate adipiscing cursus eu, suscipit id
                          nulla.
                        </p>

                        <div className="single-add-to-cart">
                          <form className="cart-quantity d-flex">
                            <div className="quantity">
                              <div className="cart-plus-minus">
                                <input
                                  type="number"
                                  className="input-text"
                                  name="quantity"
                                  value="1"
                                  title="Qty"
                                />
                              </div>
                            </div>

                            <a
                              href="javascript:void(0)"
                              className="add-to-cart"
                            >
                              Add to Cart
                            </a>
                          </form>
                        </div>

                        <div className="share-product-socail-area">
                          <p>Share this product</p>
                          <ul className="single-product-share">
                            <li>
                              <a href="javascript:void(0)">
                                <i className="fa fa-facebook"></i>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                <i className="fa fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                <i className="fa fa-pinterest"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="product-description-area section-pt">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="product-details-tab">
                        <ul role="tablist" className="nav">
                          <li className="active" role="presentation">
                            <a
                              data-toggle="tab"
                              role="tab"
                              href="#description"
                              className="active"
                            >
                              Description
                            </a>
                          </li>
                          <li role="presentation">
                            <a data-toggle="tab" role="tab" href="#reviews">
                              Reviews
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="product_details_tab_content tab-content">
                        <div
                          className="product_tab_content tab-pane active"
                          id="description"
                          role="tabpanel"
                        >
                          <div className="product_description_wrap  mt-30">
                            <div className="product_desc mb-30">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nam fringilla augue nec est
                                tristique auctor. Donec non est at libero
                                vulputate rutrum. Morbi ornare lectus quis justo
                                gravida semper. Nulla tellus mi, vulputate
                                adipiscing cursus eu, suscipit id nulla.
                              </p>

                              <p>
                                Pellentesque aliquet, sem eget laoreet ultrices,
                                ipsum metus feugiat sem, quis fermentum turpis
                                eros eget velit. Donec ac tempus ante. Fusce
                                ultricies massa massa. Fusce aliquam, purus eget
                                sagittis vulputate, sapien libero hendrerit est,
                                sed commodo augue nisi non neque. Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit. Sed
                                tempor, lorem et placerat vestibulum, metus nisi
                                posuere nisl, in accumsan elit odio quis mi.
                                Cras neque metus, consequat et blandit et,
                                luctus a nunc. Etiam gravida vehicula tellus, in
                                imperdiet ligula euismod eget.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="product_tab_content tab-pane"
                          id="reviews"
                          role="tabpanel"
                        >
                          <div className="review_address_inner mt-30">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Nam fringilla augue nec est tristique
                              auctor. Donec non est at libero vulputate rutrum.
                              Morbi ornare lectus quis justo gravida semper.
                              Nulla tellus mi, vulputate adipiscing cursus eu,
                              suscipit id nulla.
                            </p>

                            <p>
                              Pellentesque aliquet, sem eget laoreet ultrices,
                              ipsum metus feugiat sem, quis fermentum turpis
                              eros eget velit. Donec ac tempus ante. Fusce
                              ultricies massa massa. Fusce aliquam, purus eget
                              sagittis vulputate, sapien libero hendrerit est,
                              sed commodo augue nisi non neque. Lorem ipsum
                              dolor sit amet, consectetur adipiscing elit. Sed
                              tempor, lorem et placerat vestibulum, metus nisi
                              posuere nisl, in accumsan elit odio quis mi. Cras
                              neque metus, consequat et blandit et, luctus a
                              nunc. Etiam gravida vehicula tellus, in imperdiet
                              ligula euismod eget.
                            </p>

                            <p>
                              Pellentesque aliquet, sem eget laoreet ultrices,
                              ipsum metus feugiat sem, quis fermentum turpis
                              eros eget velit. Donec ac tempus ante. Fusce
                              ultricies massa massa. Fusce aliquam, purus eget
                              sagittis vulputate, sapien libero hendrerit est,
                              sed commodo augue nisi non neque. Lorem ipsum
                              dolor sit amet, consectetur adipiscing elit. Sed
                              tempor, lorem et placerat vestibulum, metus nisi
                              posuere nisl, in accumsan elit odio quis mi. Cras
                              neque metus, consequat et blandit et, luctus a
                              nunc. Etiam gravida vehicula tellus, in imperdiet
                              ligula euismod eget.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="related-product-area section-pt">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="section-title">
                        <h3>Related Product</h3>
                      </div>
                    </div>
                  </div>
                  <div className="row row-8 product-row-6-active">
                    <div className="product-col">
                      <div className="single-product-wrap mt-10">
                        <div className="product-image">
                          <a href="javascript:void(0)">
                            <img src="images/product/product-01.jpg" alt="" />
                          </a>
                        </div>

                        <div className="product-content">
                          <div className="price-box">
                            <span className="new-price">144.00 - 147.00</span>
                          </div>
                          <h6 className="product-name">
                            <a href="javascript:void(0)">Aliquam lobortis</a>
                          </h6>

                          <div className="product-button-action">
                            <a
                              href="javascript:void(0)"
                              className="add-to-cart"
                            >
                              Add to Cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-col">
                      <div className="single-product-wrap mt-10">
                        <div className="product-image">
                          <a href="javascript:void(0)">
                            <img src="images/product/product-02.jpg" alt="" />
                          </a>
                          <span className="onsale">Sale!</span>
                        </div>

                        <div className="product-content">
                          <div className="price-box">
                            <span className="new-price">14.00</span>
                            <span className="old-price">18.00</span>
                          </div>
                          <h6 className="product-name">
                            <a href="javascript:void(0)">Aliquet auctor sem</a>
                          </h6>

                          <div className="product-button-action">
                            <a
                              href="javascript:void(0)"
                              className="add-to-cart"
                            >
                              Add to cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-col">
                      <div className="single-product-wrap mt-10">
                        <div className="product-image">
                          <a href="javascript:void(0)">
                            <img src="images/product/product-03.jpg" alt="" />
                          </a>
                        </div>

                        <div className="product-content">
                          <div className="price-box">
                            <span className="new-price">70.00</span>
                            <span className="old-price">80.00</span>
                          </div>
                          <h6 className="product-name">
                            <a href="javascript:void(0)">Auctor gravida enim</a>
                          </h6>

                          <div className="product-button-action">
                            <a
                              href="javascript:void(0)"
                              className="add-to-cart"
                            >
                              Add to cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-col">
                      <div className="single-product-wrap mt-10">
                        <div className="product-image">
                          <a href="javascript:void(0)">
                            <img src="images/product/product-04.jpg" alt="" />
                          </a>
                          <span className="onsale">Sale!</span>
                        </div>

                        <div className="product-content">
                          <div className="price-box">
                            <span className="new-price">90.00</span>
                            <span className="old-price">95.00</span>
                          </div>
                          <h6 className="product-name">
                            <a href="javascript:void(0)">Auctor gravida enim</a>
                          </h6>

                          <div className="product-button-action">
                            <a
                              href="javascript:void(0)"
                              className="add-to-cart"
                            >
                              Add to cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-col">
                      <div className="single-product-wrap mt-10">
                        <div className="product-image">
                          <a href="javascript:void(0)">
                            <img src="images/product/product-01.jpg" alt="" />
                          </a>
                          <span className="onsale">Sale!</span>
                        </div>

                        <div className="product-content">
                          <div className="price-box">
                            <span className="new-price">144.00 - 147.00</span>
                          </div>
                          <h6 className="product-name">
                            <a href="javascript:void(0)">Aliquam lobortis</a>
                          </h6>

                          <div className="product-button-action">
                            <a
                              href="javascript:void(0)"
                              className="add-to-cart"
                            >
                              Select options
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-col">
                      <div className="single-product-wrap mt-10">
                        <div className="product-image">
                          <a href="javascript:void(0)">
                            <img src="images/product/product-02.jpg" alt="" />
                          </a>
                          <span className="onsale">Sale!</span>
                        </div>

                        <div className="product-content">
                          <div className="price-box">
                            <span className="new-price">14.00</span>
                            <span className="old-price">18.00</span>
                          </div>
                          <h6 className="product-name">
                            <a href="javascript:void(0)">Aliquet auctor sem</a>
                          </h6>

                          <div className="product-button-action">
                            <a
                              href="javascript:void(0)"
                              className="add-to-cart"
                            >
                              Add to cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default MenuDetail;
