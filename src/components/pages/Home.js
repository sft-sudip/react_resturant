/* eslint-disable no-unused-expressions */
import React, { Component, Fragment, Suspense } from "react";
import Header from "../core/Header";
import Footer from "../core/Footer";

const HomeSlider = React.lazy(() => import("./home/HomeSlider"));
const HomeTestimonial = React.lazy(() => import("./home/HomeTestimonial"));
const HomeBrandLogo = React.lazy(() => import("./home/HomeBrandLogo"));
const HomeAppSection = React.lazy(() => import("./home/HomeAppSection"));
const HomeBannerTop = React.lazy(() => import("./home/HomeBannerTop"));
const HomeBannerBottom = React.lazy(() => import("./home/HomeBannerBottom"));
const HomePopularMenus = React.lazy(() => import("./home/HomePopularMenus"));
const HomeTabMenus = React.lazy(() => import("./home/HomeTabMenus"));

export class Home extends Component {
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
            <HomeSlider />
            <HomeBannerTop />
            <HomePopularMenus />
            <HomeTabMenus />
            <HomeBannerBottom />
            <HomeTestimonial />
            <HomeBrandLogo />
            <HomeAppSection />
          </Suspense>
        </Fragment>
        <Footer />
      </div>
    );
  }
}

export default Home;
