/* eslint-disable no-unused-expressions */
import React, { Component, Fragment } from "react";

const HomeBannerTop = props => {
  return (
    <Fragment>
      <div className="bannerRow">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8">
              <h1>
                Welcome to <span>Food Delivery </span>
              </h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <a href="javascript:void(0)" className="order ml-0">
                Read More
              </a>
            </div>
            <div className="col-lg-4 col-md-4"></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomeBannerTop;
