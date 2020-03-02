import React, { Component, Fragment, Suspense } from "react";
import Header from "../../core/Header";
import Footer from "../../core/Footer";
import { Redirect } from "react-router-dom";
import Sidebar from "./Sidebar";
import MyProfile from "./MyProfile";
import MyOrders from "./MyOrders";
import MySupport from "./MySupport";
import MyAddress from "./MyAddress";
import MyEditProfile from "./MyEditProfile";
import MyPassword from "./MyPassword";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloggedin: localStorage.getItem("isloggedin") === "true" ? true : false,
      isOpen: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  loading = () => <div className="cover-spin"></div>;

  toggleMenu = () => {
    const currentState = this.state.isOpen;
    this.setState({
      isOpen: !currentState
    });
  };

  logoutSubmit = () => {
    const r = window.confirm("Do you really want to Sign Out?");
    if (r === true) {
      toast.success("Logout Successfull!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false
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
              this.props.history.push("/signin");
            }
          );
        }.bind(this),
        1500
      );
    }
  };

  render() {
    const { isloggedin, isOpen } = this.state;
    if (isloggedin === false) {
      return <Redirect to="/signin" />;
    }

    return (
      <div className="main-wrapper">
        <Header />
        <Fragment>
          <Suspense fallback={this.loading()}>
            <div className="innerbanner">
              <div className="container">
                <div className="row">
                  <h2>My Account</h2>
                  <div className="col-12">
                    <ul className="breadcrumb-list">
                      <li className="breadcrumb-item">
                        <a href="javascript:void(0)">Home</a>
                      </li>
                      <li className="breadcrumb-item active">My Account</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="main-content-wrap section-ptb my-account-page">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="account-dashboard">
                      <div className="row">
                        <div className="col-md-12 col-lg-3">
                          <Sidebar
                            toggleMenu={this.toggleMenu}
                            isOpen={isOpen}
                            logoutSubmit={this.logoutSubmit}
                          />
                        </div>
                        <div className="col-md-12 col-lg-9">
                          <div className="tab-content dashboard-content">
                            <div className="tab-pane active" id="dashboard">
                              <MyProfile />
                            </div>

                            <div className="tab-pane fade" id="orders">
                              <MyOrders />
                            </div>

                            <div className="tab-pane fade" id="supports">
                              <MySupport />
                            </div>

                            <div className="tab-pane fade" id="address">
                              <MyAddress />
                            </div>

                            <div className="tab-pane fade" id="account-details">
                              <MyEditProfile />
                            </div>

                            <div className="tab-pane fade" id="change-password">
                              <MyPassword />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Suspense>
        </Fragment>
        <Footer />
        <ToastContainer />
      </div>
    );
  }
}

export default Dashboard;
