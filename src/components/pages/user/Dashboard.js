import React, { Component } from "react";
import Header from "../../core/Header";
import Footer from "../../core/Footer";
import { Redirect } from "react-router-dom";

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloggedin: sessionStorage.getItem("isloggedin") === "true" ? true : false
    };
  }

  logoutSubmit = () => {
    this.setState(
      {
        isloggedin: false
      },
      () => {
        sessionStorage.clear();
      }
    );
  };

  render() {
    if (this.state.isloggedin === false) {
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
      </div>
    );
  }
}

export default Dashboard;
