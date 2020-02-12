/* eslint-disable no-unused-expressions */
import React, { Component, Fragment } from "react";

const HomeBrandLogo = props => {
  return (
    <Fragment>
      <div className="app-section">
        <div className="app-wrap">
          <div className="container">
            <div className="row text-img-block text-xs-left">
              <div className="container">
                <div className="col-xs-12 col-sm-12">
                  <div className="row">
                    <div className="col-xs-12 col-sm-5 right-image text-center">
                      <figure>
                        <img
                          src="images/app.png"
                          alt="Right Image"
                          className="img-fluid"
                        />
                      </figure>
                    </div>
                    <div className="col-xs-12 col-sm-7 left-text">
                      <h3>The Best Food Delivery App</h3>
                      <p>
                        Now you can make food happen pretty much wherever you
                        are thanks to the free easy-to-use Food Delivery &amp;
                        Takeout App.
                      </p>
                      <div className="social-btns">
                        <a
                          href="javascript:void(0)"
                          className="app-btn apple-button clearfix"
                        >
                          <div className="pull-left">
                            <i className="fa fa-apple"></i>
                          </div>
                          <div className="pull-right">
                            <span className="text">Available on the</span>
                            <span className="text-2">App Store</span>
                          </div>
                        </a>
                        <a
                          href="javascript:void(0)"
                          className="app-btn android-button clearfix"
                        >
                          <div className="pull-left">
                            <i className="fa fa-android"></i>
                          </div>
                          <div className="pull-right">
                            <span className="text">Available on the</span>
                            <span className="text-2">Play store</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomeBrandLogo;
