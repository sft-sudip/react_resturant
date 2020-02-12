/* eslint-disable no-unused-expressions */
import React, { Component, Fragment } from "react";
import Header from "../core/Header";
import Footer from "../core/Footer";
import HomeSlider from "./home/HomeSlider";
import HomeTestimonial from "./home/HomeTestimonial";
import HomeBrandLogo from "./home/HomeBrandLogo";
import HomeAppSection from "./home/HomeAppSection";
import HomeBannerTop from "./home/HomeBannerTop";
import HomeBannerBottom from "./home/HomeBannerBottom";
import HomePopularMenus from "./home/HomePopularMenus";
import HomeTabMenus from "./home/HomeTabMenus";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount = () => {
    this.hideLoader();
  };

  hideLoader() {
    setTimeout(
      function() {
        this.setState({ loading: false });
      }.bind(this),
      3000
    );
  }

  render() {

    return (
      <div className="main-wrapper">
        <Header />

        <HomeSlider />
        <HomeBannerTop />
        <HomePopularMenus />
        <HomeTabMenus />
        <HomeBannerBottom />
        <HomeTestimonial />
        <HomeBrandLogo />
        <HomeAppSection />

        <Footer />
      </div>
    );
  }
}

export default Home;
