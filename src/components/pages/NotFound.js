/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import Header from "../core/Header";
import Footer from "../core/Footer";

export class NotFound extends Component {
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
    const {loading} = this.state;
    return (
      <div>
        <Header />
        {loading === true ? (
          <div className="cover-spin"></div>
        ) : (
          <div>
            <section className="section">
              <h2>404 Page Not Found</h2>
            </section>
          </div>
        )}
        <Footer />
      </div>
    );
  }
}

export default NotFound;
