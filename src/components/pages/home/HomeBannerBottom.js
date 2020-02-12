/* eslint-disable no-unused-expressions */
import React, { Component, Fragment } from "react";

const HomeBannerBottom = props => {
  return (
    <Fragment>
      <div className="banner-area mt-60 mb-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="single-banner">
                <a href="javascript:void(0)">
                  <img src="images/banner-01.jpg" alt="" />
                </a>
              </div>
            </div>
            <div className="col-lg-6  col-md-6">
              <div className="single-banner">
                <a href="javascript:void(0)">
                  <img src="images/banner-02.jpg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomeBannerBottom;
