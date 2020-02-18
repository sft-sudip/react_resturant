import React, { Component, Fragment, Suspense } from "react";
import Header from "../core/Header";
import Footer from "../core/Footer";
import { Redirect } from "react-router-dom";
import * as apiService from "../global/service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloggedin: localStorage.getItem("isloggedin") === "true" ? true : false,
      fields: {},
      errors: {},
      uotp: 12345,
      existuser: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.existUserCheck = this.existUserCheck.bind(this);
    this.submitRegisterForm = this.submitRegisterForm.bind(this);
  }

  loading = () => <div className="cover-spin"></div>;

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  }

  existUserCheck = e => {
    this.setState({
      existuser: 1
    });
  };

  submitRegisterForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      apiService.userRegister(this.state.fields).then(res => {
        // console.log("response ==>> ", res);
        // return false;
        if (res.status === 200) {
          this.setState(
            {
              isloggedin: true
            },
            () => {
              localStorage.setItem("isloggedin", true);
              localStorage.setItem("userData", res.data);
            }
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
    }
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["firstname"]) {
      formIsValid = false;
      errors["firstname"] = "*Please enter your firstname";
    }

    if (typeof fields["firstname"] !== "undefined") {
      if (!fields["firstname"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["firstname"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["lastname"]) {
      formIsValid = false;
      errors["lastname"] = "*Please enter your lastname";
    }

    if (typeof fields["lastname"] !== "undefined") {
      if (!fields["lastname"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["lastname"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["phoneno"]) {
      formIsValid = false;
      errors["phoneno"] = "*Please enter your Phone no.";
    }

    if (typeof fields["phoneno"] !== "undefined") {
      if (!fields["phoneno"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["phoneno"] = "*Please enter valid Phone no.";
      }
    }

    if (!fields["otp"]) {
      formIsValid = false;
      errors["otp"] = "*Please enter your otp.";
    }

    if (typeof fields["otp"] !== "undefined") {
      if (fields["otp"] != this.state.uotp) {
        formIsValid = false;
        errors["otp"] = "*OTP mismatch";
      }
    }

    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "*Please enter your email-ID.";
    }

    if (typeof fields["email"] !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(fields["email"])) {
        formIsValid = false;
        errors["email"] = "*Please enter valid email-ID.";
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (!fields["cpassword"]) {
      formIsValid = false;
      errors["cpassword"] = "*Please enter your confirm password.";
    }

    if (typeof fields["cpassword"] !== "undefined") {
      if (fields["cpassword"] != fields["password"]) {
        formIsValid = false;
        errors["cpassword"] = "*Passowrd & Confirm Password mismatch";
      }
    }

    if (this.state.existuser == 0) {
      formIsValid = false;
      errors["existuser"] = "*Please verify your phone no first";
    }

    this.setState({
      errors: errors
    });

    return formIsValid;
  }

  render() {
    const { isloggedin } = this.state;
    if (isloggedin === true) {
      return <Redirect to="/user/dashboard" />;
    }

    return (
      <div>
        <Header />
        <Fragment>
          <Suspense fallback={this.loading()}>
            <form
              method="post"
              name="RegistrationForm"
              onSubmit={this.submitRegisterForm}
            >
              <div className="form-group">
                <label>First Name</label>
                <input
                  className="form-control"
                  type="text"
                  name="firstname"
                  value={this.state.fields.firstname}
                  onChange={this.handleChange}
                />
                <div className="errorMsg">{this.state.errors.firstname}</div>
              </div>

              <div className="form-group">
                <label>Last Name</label>
                <input
                  className="form-control"
                  type="text"
                  name="lastname"
                  value={this.state.fields.lastname}
                  onChange={this.handleChange}
                />
                <div className="errorMsg">{this.state.errors.lastname}</div>
              </div>

              <div className="form-group">
                <label>
                  Phone Number{" "}
                  <button
                    className="btn btn-info"
                    onClick={this.existUserCheck}
                  >
                    Verify
                  </button>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="phoneno"
                  value={this.state.fields.phoneno}
                  onChange={this.handleChange}
                />
                <div className="errorMsg">{this.state.errors.phoneno}</div>
              </div>

              <div className="form-group">
                <label>OTP</label>
                <input
                  className="form-control"
                  type="text"
                  name="otp"
                  value={this.state.fields.otp}
                  onChange={this.handleChange}
                />
                <div className="errorMsg">{this.state.errors.otp}</div>
              </div>

              <div className="form-group">
                <label>Email ID</label>
                <input
                  className="form-control"
                  type="text"
                  name="email"
                  value={this.state.fields.email}
                  onChange={this.handleChange}
                />
                <div className="errorMsg">{this.state.errors.email}</div>
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  value={this.state.fields.password}
                  onChange={this.handleChange}
                />
                <div className="errorMsg">{this.state.errors.password}</div>
              </div>

              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  className="form-control"
                  type="password"
                  name="cpassword"
                  value={this.state.fields.cpassword}
                  onChange={this.handleChange}
                />
                <div className="errorMsg">{this.state.errors.cpassword}</div>
              </div>
              <input
                className="form-control"
                type="hidden"
                name="existuser"
                value={this.state.existuser}
              />
              <input
                type="submit"
                className="btn btn-primary"
                value="Register"
              />
              <div className="errorMsg">{this.state.errors.existuser}</div>
            </form>
          </Suspense>
        </Fragment>
        <Footer />
        <ToastContainer />
      </div>
    );
  }
}

export default Signup;
