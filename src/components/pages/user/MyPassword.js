import React, { Component, Fragment, Suspense } from "react";

export class MyPassword extends Component {
  constructor(props) {
    super(props);
  }

  loading = () => <div className="cover-spin"></div>;

  render() {
    return (
      <Fragment>
        <Suspense fallback={this.loading()}>
          <h3>Change Password</h3>
          <form>
            <div className="form-group row">
              <label for="inputEmail3" className="col-sm-3 col-form-label">
                Existing password
              </label>
              <div className="col-sm-9">
                <input
                  type="password"
                  className="form-control"
                  id="inputEmail3"
                  placeholder="Existing password"
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="inputPassword3" className="col-sm-3 col-form-label">
                New Password
              </label>
              <div className="col-sm-9">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword3"
                  placeholder="New Password"
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="inputPassword3" className="col-sm-3 col-form-label">
                Confirm Password
              </label>
              <div className="col-sm-9">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword3"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-10">
                <button
                  type="submit"
                  className="btn btn-primary customer-support-password"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </Suspense>
      </Fragment>
    );
  }
}

export default MyPassword;
