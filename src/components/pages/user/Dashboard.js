import React, { Component } from "react";
import Header from "../../core/Header";
import Footer from "../../core/Footer";
import { Redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloggedin: localStorage.getItem("isloggedin") === "true" ? true : false
    };
  }

  logoutSubmit = () => {
    toast.info("Logout Successfull!", {
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
            isloggedin: false
          },
          () => {
            localStorage.removeItem("isloggedin");
            localStorage.removeItem("userData");
          }
        );
      }.bind(this),
      1000
    );
  };

  render() {
    const {isloggedin} = this.state;
    if (isloggedin === false) {
      return <Redirect to="/signin" />;
    }

    return (
      <div>
        <Header />
        <section className="section">
          <h2>Dashboard</h2>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.logoutSubmit}
          >
            Logout
          </button>
        </section>
        <Footer />
        <ToastContainer />
      </div>
    );
  }
}

export default Dashboard;
