import React, { Component, Fragment, Suspense } from "react";
import Header from "../../core/Header";
import Footer from "../../core/Footer";
import { Redirect } from "react-router-dom";

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloggedin: localStorage.getItem("isloggedin") === "true" ? true : false
    };
  }

  loading = () => <div className="cover-spin"></div>;

  render() {
    const { isloggedin } = this.state;
    if (isloggedin === false) {
      return <Redirect to="/signin" />;
    }

    return (
      <div>
        <Header />
        <Fragment>
          <Suspense fallback={this.loading()}>
            <div className="innerbanner">
              <div className="container">
                <div className="row">
                  <h2>Dashboard</h2>
                  <div className="col-12">
                    <ul className="breadcrumb-list">
                      <li className="breadcrumb-item">
                        <a href="javascript:void(0)">Home</a>
                      </li>
                      <li className="breadcrumb-item active">Dashboard</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Suspense>
        </Fragment>
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
