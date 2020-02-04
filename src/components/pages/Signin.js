import React, { Component } from "react";
import Header from "../core/Header";
import Footer from "../core/Footer";
import { Redirect } from "react-router-dom";
import * as apiService from "../global/service";

export class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloggedin: sessionStorage.getItem("isloggedin") === "true" ? true : false
    };
  }

  loginSubmit = () => {
    var data = {
      email: "eve.holt@reqres.in",
      password: "pistol"
    };
    apiService.userLogin(data).then(res => {
      //console.log("response ==>> ", res);
      //return false;
      if (res.status === 200) {
        this.setState(
          {
            isloggedin: true
          },
          () => {
            sessionStorage.setItem("isloggedin", true);
            sessionStorage.setItem("userData", res.data);
          }
        );
      }
    });
  };

  render() {
    if (this.state.isloggedin === true) {
      return <Redirect to="/user/dashboard" />;
    }

    return (
      <div>
        <Header />
        <section className="section">
          <h2>Signin</h2>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.loginSubmit}
          >
            Login
          </button>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Signin;
