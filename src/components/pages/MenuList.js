/* eslint-disable no-unused-expressions */
import React, { Component, Fragment, Suspense } from "react";

const loading = () => <div className="cover-spin"></div>;

const MenuList = props => {
  let menus;
  if (props.menus) {
    menus = props.menus.map((menu, index) => {
      return (
        <div className="shop-product-list-wrap">
          <div className="row product-layout-list">
            <div className="col-lg-3 col-md-3">
              <div className="single-product">
                <div className="product-image">
                  <a href="javascript:void(0)">
                    <img src="images/menu/1.png" alt="Produce Images" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="product-content-list text-left">
                <h3>Auctor gravida enim</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Architecto suscipit aliquam, dignissimos nesciunt, quos
                  voluptas tenetur necessitatibus voluptate vitae quo quibusdam
                  nihil.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="block2">
                <ul className="stock-cont">
                  <li className="product-sku">
                    Product Code: <span>P{menu.id}</span>
                  </li>
                  <li className="product-stock-status">
                    Availability:
                    <span className="in-stock">In Stock</span>
                  </li>
                </ul>
                <div className="price-box">
                  <span className="new-price">90.00</span>
                  <span className="old-price">95.00</span>
                </div>
                <div className="product-button">
                  <div className="add-to-cart">
                    <div className="product-button-action">
                      <a
                        href="javascript:void(0)" 
                        onClick={props.addToCart.bind(this, menu.id)} 
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
      );
    });
  }
  return (
    <Fragment>
      <Suspense fallback={loading}>
        <div className="shop-product-wrapper">{menus}</div>
      </Suspense>
    </Fragment>
  );
};

export default MenuList;
