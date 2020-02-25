import React, { Component, Fragment, Suspense } from "react";

export class MyProfile extends Component {
  constructor(props) {
    super(props);
  }

  loading = () => <div className="cover-spin"></div>;

  render() {
    return (
      <Fragment>
        <Suspense fallback={this.loading()}>
          <h3>Dashboard</h3>
          <p>
            From your account dashboard. you can easily check &amp; view your
            <a href="javascript:void(0)">recent orders</a>, manage your
            <a href="javascript:void(0)">shipping and billing addresses</a>
            and
            <a href="javascript:void(0)">
              edit your password and account details.
            </a>
          </p>
        </Suspense>
      </Fragment>
    );
  }
}

export default MyProfile;
