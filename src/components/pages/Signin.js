import React, { Component } from "react";
import Header from "../core/Header";
import Footer from "../core/Footer";
import { Redirect } from "react-router-dom";
import * as apiService from "../global/service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloggedin: localStorage.getItem("isloggedin") === "true" ? true : false
    };
    this.loginSubmit = this.loginSubmit.bind(this);
  }

  loginSubmit = () => {
    var data = {
      email: "eve.holt@reqres.in",
      password: "pistol"
    };
    apiService.userLogin(data).then(res => {
      // console.log("response ==>> ", res);
      // return false;
      if (res.status === 200) {
        toast.info("Login Successfull!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
        setTimeout(
          function() {
            this.setState(
              {
                isloggedin: true
              },
              () => {
                localStorage.setItem("isloggedin", true);
                localStorage.setItem("userData", res.data);
                this.props.history.push("/user/dashboard");
              }
            );
          }.bind(this),
          1000
        );
      } else {
        toast.error("Oops! Something Went Wrong!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
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
        <ToastContainer />
      </div>
    );
  }
}

export default Signin;
