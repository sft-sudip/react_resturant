import React, { Component, Fragment, Suspense } from "react";
import { ToastContainer, toast } from "react-toastify";

export class MyPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloggedin: localStorage.getItem("isloggedin") === "true" ? true : false,
      fields: {},
      errors: {},
      isLoading: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitPasswordForm = this.submitPasswordForm.bind(this);
  }

  loading = () => <div className="cover-spin"></div>;

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  }

  submitPasswordForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      toast.success("Password has changed successfully!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false
      });

      let fields = this.state.fields;
      fields["opassword"] = "";
      fields["npassword"] = "";
      fields["cpassword"] = "";

      this.setState({
        fields
      });
    }
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["opassword"]) {
      formIsValid = false;
      errors["opassword"] = "*Please enter your old password.";
    }

    if (!fields["npassword"]) {
      formIsValid = false;
      errors["npassword"] = "*Please enter your new password.";
    }    

    if (!fields["cpassword"]) {
      formIsValid = false;
      errors["cpassword"] = "*Please enter your confirm password.";
    }

    if (typeof fields["cpassword"] !== "undefined") {
      if (fields["cpassword"] != fields["npassword"]) {
        formIsValid = false;
        errors["cpassword"] = "*New Passowrd & Confirm Password mismatch";
      }
    }

    this.setState({
      errors: errors
    });

    return formIsValid;
  }

  render() {
    const { isloggedin, isLoading, fields, errors } = this.state;
    return (
      <Fragment>
        <Suspense fallback={this.loading()}>
          <h3>Change Password</h3>
          <form
            id="password-form"
            className="password-form-box"
            method="post"
            name="PasswordForm"
            onSubmit={this.submitPasswordForm}
          >
            <div className="form-group row">
              <label for="inputEmail3" className="col-sm-3 col-form-label">
                Existing Password
              </label>
              <div className="col-sm-9">
                <input
                  className="form-control"
                  id="inputEmail3"
                  type="password"
                  name="opassword"
                  value={fields.opassword}
                  onChange={this.handleChange}
                  placeholder="Enter Old Password"
                  autoComplete="off"
                />
                <div className="errorMsg">{errors.opassword}</div>
              </div>
            </div>
            <div className="form-group row">
              <label for="inputPassword3" className="col-sm-3 col-form-label">
                New Password
              </label>
              <div className="col-sm-9">
                <input
                  className="form-control"
                  id="inputPassword3"
                  type="password"
                  name="npassword"
                  value={fields.npassword}
                  onChange={this.handleChange}
                  placeholder="Enter New Password"
                  autoComplete="off"
                />
                <div className="errorMsg">{errors.npassword}</div>
              </div>
            </div>
            <div className="form-group row">
              <label for="inputPassword3" className="col-sm-3 col-form-label">
                Confirm Password
              </label>
              <div className="col-sm-9">
                <input
                  className="form-control"
                  id="inputPassword3"
                  type="password"
                  name="cpassword"
                  value={fields.cpassword}
                  onChange={this.handleChange}
                  placeholder="Enter Confirm Password"
                  autoComplete="off"
                />
                <div className="errorMsg">{errors.cpassword}</div>
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
