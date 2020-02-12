/* eslint-disable no-unused-expressions */
import React, { Component, Fragment } from "react";

const HomeSlider = props => {
  return (
    <Fragment>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="images/homebanner1.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="images/homebanner2.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="images/homebanner3.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleFade"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleFade"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
        <div className="search-sec">
          <div className="container">
            <form method="post">
              <div className="row">
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-lg-4 col-md-3 col-sm-12 p-0">
                      <input
                        type="text"
                        className="form-control search-slt"
                        placeholder="Enter your location"
                      />
                    </div>
                    <div className="col-lg-4 col-md-3 col-sm-12 p-0">
                      <select
                        className="form-control search-slt"
                        id="exampleFormControlSelect1"
                      >
                        <option>Select Food</option>
                        <option>Example one</option>
                        <option>Example one</option>
                        <option>Example one</option>
                        <option>Example one</option>
                        <option>Example one</option>
                        <option>Example one</option>
                      </select>
                    </div>
                    <div className="col-lg-4 col-md-3 col-sm-12 p-0">
                      <button type="button" className="btn order2">
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomeSlider;
