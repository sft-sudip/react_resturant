import React, { Component } from "react";
import Header from "../core/Header";
import Footer from "../core/Footer";
import { Redirect } from "react-router-dom";
import * as apiService from "../global/service";

export class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloggedin: sessionStorage.getItem("isloggedin") === "true" ? true : false
    };
  }

  render() {
    if (this.state.isloggedin === true) {
      return <Redirect to="/user/dashboard" />;
    }

    return (
      <div>
        <Header />
        <section className="section">
          <h2>Signup</h2>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Signup;
