import React, { Component, Fragment, Suspense } from "react";

export class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  loading = () => <div className="cover-spin"></div>;

  render() {
    const { isOpen, toggleMenu } = this.props;
    return (
      <Fragment>
        <Suspense fallback={this.loading()}>
          <ul role="tablist" className="nav flex-column dashboard-list">
            <li>
              <div className="profile">
                <span>
                  <img src="images/profile.png" alt="" />
                </span>
                <span className="profile-text">Welcome, Sudip Kr Paul</span>
              </div>
            </li>
            <li>
              <a
                href="#dashboard"
                data-toggle="tab"
                className="nav-link active"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a href="#orders" data-toggle="tab" className="nav-link">
                My Orders
              </a>
            </li>
            <li>
              <a href="#supports" data-toggle="tab" className="nav-link">
                Support
              </a>
            </li>

            <div className="dropdown-btn" onClick={toggleMenu}>
              Setting <i className="fa fa-caret-down"></i>
            </div>

            <li className={isOpen ? null : "menuHide"}>
              <a href="#address" data-toggle="tab" className="nav-link">
                Delivery Addresses
              </a>
            </li>
            <li className={isOpen ? null : "menuHide"}>
              <a href="#account-details" data-toggle="tab" className="nav-link">
                Edit Profile
              </a>
            </li>
            <li className={isOpen ? null : "menuHide"}>
              <a href="#change-password" data-toggle="tab" className="nav-link">
                Change Password
              </a>
            </li>

            <li>
              <a href="javascript:void(0)" className="nav-link">
                logout
              </a>
            </li>
          </ul>
        </Suspense>
      </Fragment>
    );
  }
}

export default Sidebar;
