import React, { Component, Fragment, Suspense } from "react";

export class MySupport extends Component {
  constructor(props) {
    super(props);
  }

  loading = () => <div className="cover-spin"></div>;

  render() {
    return (
      <Fragment>
        <Suspense fallback={this.loading()}>
          <h3>Customer Support</h3>
          <form>
            <div className="form-group row">
              <label for="inputEmail3" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail3"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="inputPassword3" className="col-sm-2 col-form-label">
                Contact Number
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword3"
                  placeholder="Contact Number"
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                for="exampleFormControlTextarea1"
                className="col-sm-2 col-form-label"
              >
                Message
              </label>
              <div className="col-sm-10">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Message"
                ></textarea>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-10">
                <button
                  type="submit"
                  className="btn btn-primary customer-support"
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

export default MySupport;
