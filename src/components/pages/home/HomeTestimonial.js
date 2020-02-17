/* eslint-disable no-unused-expressions */
import React, { Component, Fragment } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settingsTestimonial = {
  dots: true,
  infinite: true, 
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  speed: 4000,
  cssEase: "linear"
};

const HomeTestimonial = props => {
  return (
    <Fragment>
      <div className="testimonials-area testimonial-bg">
        <div className="container">
          <h2>Our Clients Say</h2>
          <div className="wqtestimonial-slider">
            <Slider {...settingsTestimonial}>
              <div className="col-lg-6">
                <div className="testimonial-wrap">
                  <div className="quote-container">
                    <div className="quote-image">
                      <img src="images/testimonial/testimonial-01.jpg" alt="" />
                    </div>
                    <div className="author">
                      <ul>
                        <li className="name">Jenifer Brown</li>
                        <li className="title">Customer</li>
                      </ul>
                    </div>
                    <div className="testimonials-text">
                      <p>
                        Support and response has been amazing, helping me with
                        several issues I came across and got them solved almost
                        the same day. A pleasure to work with them!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="testimonial-wrap">
                  <div className="quote-container">
                    <div className="quote-image">
                      <img src="images/testimonial/testimonial-02.jpg" alt="" />
                    </div>
                    <div className="author">
                      <ul>
                        <li className="name">Kathy Young</li>
                        <li className="title">Customer</li>
                      </ul>
                    </div>
                    <div className="testimonials-text">
                      <p>
                        Support and response has been amazing, helping me with
                        several issues I came across and got them solved almost
                        the same day. A pleasure to work with them!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="testimonial-wrap">
                  <div className="quote-container">
                    <div className="quote-image">
                      <img src="images/testimonial/testimonial-03.jpg" alt="" />
                    </div>
                    <div className="author">
                      <ul>
                        <li className="name">Morgel Tomi</li>
                        <li className="title">Customer</li>
                      </ul>
                    </div>
                    <div className="testimonials-text">
                      <p>
                        Support and response has been amazing, helping me with
                        several issues I came across and got them solved almost
                        the same day. A pleasure to work with them!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="testimonial-wrap">
                  <div className="quote-container">
                    <div className="quote-image">
                      <img src="images/testimonial/testimonial-01.jpg" alt="" />
                    </div>
                    <div className="author">
                      <ul>
                        <li className="name">Jenifer Brown</li>
                        <li className="title">Customer</li>
                      </ul>
                    </div>
                    <div className="testimonials-text">
                      <p>
                        Support and response has been amazing, helping me with
                        several issues I came across and got them solved almost
                        the same day. A pleasure to work with them!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="testimonial-wrap">
                  <div className="quote-container">
                    <div className="quote-image">
                      <img src="images/testimonial/testimonial-01.jpg" alt="" />
                    </div>
                    <div className="author">
                      <ul>
                        <li className="name">Jenifer Brown</li>
                        <li className="title">Customer</li>
                      </ul>
                    </div>
                    <div className="testimonials-text">
                      <p>
                        Support and response has been amazing, helping me with
                        several issues I came across and got them solved almost
                        the same day. A pleasure to work with them!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomeTestimonial;
