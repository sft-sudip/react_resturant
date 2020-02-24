/* eslint-disable no-unused-expressions */
import React, { Component, Fragment, Suspense } from "react";
import Header from "../core/Header";
import Footer from "../core/Footer";
import * as apiService from "../global/service";

export class Thankyou extends Component {
  constructor(props) {
    super(props);
  }

  loading = () => <div className="cover-spin"></div>;

  render() {
    return (
      <div className="main-wrapper">
        <Header />
        <Fragment>
          <Suspense fallback={this.loading()}>
            <div className="main-content-wrap section-ptb lagin-and-register-page login_background">
              <div className="container">
                <div className="row">
                  <div className="col-lg-7 col-md-12 ml-auto mr-auto">
                    <div className="login-form-container">
                      <div className="login-register-wrapper">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <div className="thankyou">
                              <img src="images/Tick-in-a-circle.png" alt="" />
                            </div>
                            <h2>Your Order Placed Successfully !</h2>
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

export default Thankyou;
