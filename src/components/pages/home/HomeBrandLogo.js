/* eslint-disable no-unused-expressions */
import React, { Component, Fragment } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settingsBrandLogo = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 4000
};

const HomeBrandLogo = props => {
  return (
    <Fragment>
      <div className="our-brand-area section-pt-100 section-pb-60 brand-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="our-brand-active">
                <Slider {...settingsBrandLogo}>
                  <div className="brand-group">
                    <div className="brand-item">
                      <a href="javascript:void(0)">
                        <img src="images/brand/brand-01.png" alt="" />
                      </a>
                    </div>
                    <div className="brand-item">
                      <a href="javascript:void(0)">
                        <img src="images/brand/brand-03.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="brand-group">
                    <div className="brand-item">
                      <a href="javascript:void(0)">
                        <img src="images/brand/brand-02.png" alt="" />
                      </a>
                    </div>
                    <div className="brand-item">
                      <a href="javascript:void(0)">
                        <img src="images/brand/brand-04.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="brand-group">
                    <div className="brand-item">
                      <a href="javascript:void(0)">
                        <img src="images/brand/brand-03.png" alt="" />
                      </a>
                    </div>
                    <div className="brand-item">
                      <a href="javascript:void(0)">
                        <img src="images/brand/brand-01.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="brand-group">
                    <div className="brand-item">
                      <a href="javascript:void(0)">
                        <img src="images/brand/brand-04.png" alt="" />
                      </a>
                    </div>
                    <div className="brand-item">
                      <a href="javascript:void(0)">
                        <img src="images/brand/brand-03.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="brand-group">
                    <div className="brand-item">
                      <a href="javascript:void(0)">
                        <img src="images/brand/brand-06.png" alt="" />
                      </a>
                    </div>
                    <div className="brand-item">
                      <a href="javascript:void(0)">
                        <img src="images/brand/brand-03.png" alt="" />
                      </a>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomeBrandLogo;
