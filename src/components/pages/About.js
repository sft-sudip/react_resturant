import React, { Component, Fragment, Suspense } from "react";
import Header from "../core/Header";
import Footer from "../core/Footer";

export class About extends Component {
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
            <div className="innerbanner">
              <div className="container">
                <div className="row">
                  <h2>About Us</h2>
                  <div className="col-12">
                    <ul className="breadcrumb-list">
                      <li className="breadcrumb-item">
                        <a href="javascript:void(0)">Home</a>
                      </li>
                      <li className="breadcrumb-item active">About Us</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="main-content-wrap">
              <div className="about-us-wlc section-pt section-pb">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="about-us-wrapper">
                        <div className="title text-center mb-30">
                          <h2>About Us</h2>
                        </div>

                        <div className="about-welcome-text section-pt text-center">
                          <div className="about-shop-image">
                            <img src="images/aboutImg.jpg" alt="" />
                          </div>

                          <div className="about-shop-text">
                            <h2>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.
                            </h2>
                            <p className="welcome-dec">
                              Adipiscing lacus ut elementum, nec duis, tempor
                              litora turpis dapibus. Imperdiet cursus odio
                              tortor in elementum. Egestas nunc eleifend feugiat
                              lectus laoreet, vel nunc taciti integer cras. Hac
                              pede dis, praesent nibh ac dui mauris sit.
                              Pellentesque mi, facilisi mauris, elit sociis leo
                              sodales accumsan. Iaculis ac fringilla torquent
                              lorem consectetuer, sociosqu phasellus risus urna
                              aliquam, ornare.
                            </p>

                            <p className="welcome-dec">
                              Adipiscing lacus ut elementum, nec duis, tempor
                              litora turpis dapibus. Imperdiet cursus odio
                              tortor in elementum. Egestas nunc eleifend feugiat
                              lectus laoreet, vel nunc taciti integer cras. Hac
                              pede dis, praesent nibh ac dui mauris sit.
                              Pellentesque mi, facilisi mauris, elit sociis leo
                              sodales accumsan. Iaculis ac fringilla torquent
                              lorem consectetuer, sociosqu phasellus risus urna
                              aliquam, ornare.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mission-area section-pb section-pt-30">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-4 col-md-6">
                        <div className="single-mission mt-30">
                          <div className="image-thum">
                            <img src="images/we-do.jpg" alt="" />
                          </div>
                          <div className="content mt-15 text-center">
                            <h4>What do we do?</h4>
                            <p>
                              Sed ut perspiciatis unde omnis iste natus error
                              sit voluptatem accusantium doloremque laudantium,
                              totam rem aperiam, eaque ipsa quae ab illo
                              inventore veritatis et quasi architecto
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="single-mission mt-30">
                          <div className="image-thum">
                            <img src="images/aboutImg.jpg" alt="" />
                          </div>
                          <div className="content mt-15 text-center">
                            <h4>Our Mission</h4>
                            <p>
                              Sed ut perspiciatis unde omnis iste natus error
                              sit voluptatem accusantium doloremque laudantium,
                              totam rem aperiam, eaque ipsa quae ab illo
                              inventore veritatis et quasi architecto
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="single-mission mt-30">
                          <div className="image-thum">
                            <img src="images/History-Of-Us.jpg" alt="" />
                          </div>
                          <div className="content mt-15 text-center">
                            <h4>History Of Us</h4>
                            <p>
                              Sed ut perspiciatis unde omnis iste natus error
                              sit voluptatem accusantium doloremque laudantium,
                              totam rem aperiam, eaque ipsa quae ab illo
                              inventore veritatis et quasi architecto
                            </p>
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

export default About;
