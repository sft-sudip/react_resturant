/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import Header from "../core/Header";
import Footer from "../core/Footer";

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
          <div className="cover-spin"></div>
        ) : (
          <div>
            <section className="section">
              <h2>Home</h2>
            </section>
          </div>
        )}
        <Footer />
      </div>
    );
  }
}

export default Home;
