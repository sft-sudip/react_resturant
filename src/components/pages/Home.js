/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import Header from "../core/Header";
import Footer from "../core/Footer";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

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
      <div>
        <Header />
        {this.state.loading === true ? (
          <Loader type="Triangle" color="#00BFFF" height={100} width={100} />
        ) : (
          <section className="section">
            <h2>Home</h2>
          </section>
        )}
        <Footer />
      </div>
    );
  }
}

export default Home;
