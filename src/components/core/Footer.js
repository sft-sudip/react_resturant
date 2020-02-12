import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export class Footer extends Component {
  render() {
    return (
      <Fragment>
        <footer>
          <div className="footer-top section-pb section-pt-60">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="widget-footer">
                    <h6 className="title-widget">About Us</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consecte adipisicing elit, sed
                      do tempor eget loved dost venenatis.Lorem ipsum dolor sit
                      amet, consecte adipisicing elit, sed do tempor eget loved
                      dost venenatis.
                    </p>
                    <ul className="social-icons">
                      <li>
                        <a
                          className="facebook social-icon"
                          href="javascript:void(0)"
                          title="Facebook"
                          target="_blank"
                        >
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="twitter social-icon"
                          href="javascript:void(0)"
                          title="Twitter"
                          target="_blank"
                        >
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="instagram social-icon"
                          href="javascript:void(0)"
                          title="Instagram"
                          target="_blank"
                        >
                          <i className="fa fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="linkedin social-icon"
                          href="javascript:void(0)"
                          title="Linkedin"
                          target="_blank"
                        >
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="rss social-icon"
                          href="javascript:void(0)"
                          title="Rss"
                          target="_blank"
                        >
                          <i className="fa fa-rss"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-6">
                  <div className="widget-footer">
                    <h6 className="title-widget">Quick Contact</h6>
                    <ul className="footer-list">
                      <li>
                        <a href="javascript:void(0)">Home</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">About Us</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Menu</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Testimonial</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-6">
                  <div className="widget-footer">
                    <h6 className="title-widget">Opening Time</h6>
                    <ul className="footer-list">
                      <li>
                        Saturday : <span>9am - 11pm</span>
                      </li>
                      <li>
                        Sunday : <span>Close</span>
                      </li>
                      <li>
                        Monday : <span>9am - 11pm</span>
                      </li>
                      <li>
                        Tuesday : <span>9am - 11pm</span>
                      </li>
                      <li>
                        Wednesday : <span>9am - 11pm</span>
                      </li>
                      <li>
                        Thursday : <span>9am - 11pm</span>
                      </li>
                      <li>
                        Friday : <span>9am - 11pm</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="widget-footer">
                    <h6 className="title-widget">Contact Info</h6>
                    <div className="contact-call-wrap">
                      <img src="images/icon/img-headphone.png" alt="" />
                      <div className="footer-call">
                        <p>Hotline Free 24/24:</p>
                        <h6>(+800) 123 456 789</h6>
                      </div>
                    </div>
                    <div className="footer-addres">
                      <p>
                        <span>
                          <i
                            className="fa fa-map-marker"
                            aria-hidden="true"
                          ></i>
                        </span>
                        Lorem ipsum dolor sit amet, consecte adipisicing elit,
                        sed do tempor eget loved dost venenatis.Lorem ipsum
                      </p>
                      <p>
                        <span>
                          <i className="fa fa-envelope" aria-hidden="true"></i>
                        </span>
                        <a href="javascript:void(0)">Contact@gmail.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                  <div className="copy-left-text">
                    <p>
                      Copyright &copy;2020
                      <a href="javascript:void(0)">Food Delivery</a>.All right
                      reserved.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="copy-right-image">
                    <img src="images/icon/img-payment.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </Fragment>
    );
  }
}

export default Footer;
