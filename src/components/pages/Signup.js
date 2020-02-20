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
      uotp:
        sessionStorage.getItem("uotp") != ""
          ? sessionStorage.getItem("uotp")
          : "",
      existuser: sessionStorage.getItem("existuser") != "" ? true : false,
      isLoading: false
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
    this.setState({ isLoading: true });
    toast.success("OTP has sent to your phone no!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false
    });
    this.setState(
      {
        existuser: false,
        uotp: "12345",
        isLoading: false
      },
      () => {
        sessionStorage.setItem("existuser", false);
        sessionStorage.setItem("uotp", "12345");
      }
    );
  };

  submitRegisterForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      this.setState({ isLoading: true });
      apiService.userRegister(this.state.fields).then(res => {
        // console.log("response ==>> ", res);
        // return false;
        if (res.status === 200) {
          toast.success("Registrtion Successfull!", {
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
                  isloggedin: true,
                  isLoading: false
                },
                () => {
                  localStorage.setItem("isloggedin", true);
                  localStorage.setItem("userData", res.data);
                  this.props.history.push("/user/dashboard");
                }
              );
            }.bind(this),
            1500
          );
        } else {
          toast.error("Oops! Something Went Wrong!", {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false
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

    if (this.state.existuser) {
      formIsValid = false;
      toast.error("Please verify your phone no first", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false
      });
    }

    this.setState({
      errors: errors
    });

    return formIsValid;
  }

  render() {
    const { isloggedin, isLoading, fields, errors } = this.state;
    if (isloggedin === true) {
      return <Redirect to="/user/dashboard" />;
    }

    return (
      <div className="main-wrapper">
        {isLoading ? <div className="cover-spin"></div> : ""}
        <Header />
        <Fragment>
          <Suspense fallback={this.loading()}>
            <div className="main-content-wrap section-ptb lagin-and-register-page login_background">
              <div className="container">
                <div className="row">
                  <div className="col-lg-7 col-md-12 ml-auto mr-auto">
                    <div className="login-form-container">
                      <div className="login-register-wrapper">
                        <h2>Register</h2>
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form
                              method="post"
                              name="RegistrationForm"
                              onSubmit={this.submitRegisterForm}
                            >
                              <div className="login-input-box">
                                <div className="form-group">
                                  <input
                                    className="form-control"
                                    type="text"
                                    name="firstname"
                                    value={fields.firstname}
                                    onChange={this.handleChange}
                                    placeholder="Enter First Name"
                                    autoComplete="off"
                                  />
                                  <div className="errorMsg">
                                    {errors.firstname}
                                  </div>
                                </div>

                                <div className="form-group">
                                  <input
                                    className="form-control"
                                    type="text"
                                    name="lastname"
                                    value={fields.lastname}
                                    onChange={this.handleChange}
                                    placeholder="Enter Last Name"
                                    autoComplete="off"
                                  />
                                  <div className="errorMsg">
                                    {errors.lastname}
                                  </div>
                                </div>

                                <div className="form-group">
                                  <div class="input-group mb-3">
                                    <input
                                      className="form-control"
                                      type="text"
                                      name="phoneno"
                                      value={fields.phoneno}
                                      onChange={this.handleChange}
                                      placeholder="Enter Phone No"
                                      autoComplete="off"
                                    />
                                    <div class="input-group-append">
                                      <button
                                        class="btn btn-outline-secondary verify"
                                        type="button"
                                        onClick={this.existUserCheck}
                                      >
                                        Verify
                                      </button>
                                    </div>
                                  </div>
                                  <div className="errorMsg">
                                    {errors.phoneno}
                                  </div>
                                </div>

                                <div className="form-group">
                                  <input
                                    className="form-control"
                                    type="text"
                                    name="otp"
                                    value={fields.otp}
                                    onChange={this.handleChange}
                                    placeholder="Enter OTP"
                                    autoComplete="off"
                                  />
                                  <div className="errorMsg">{errors.otp}</div>
                                </div>

                                <div className="form-group">
                                  <input
                                    className="form-control"
                                    type="text"
                                    name="email"
                                    value={fields.email}
                                    onChange={this.handleChange}
                                    placeholder="Enter Email ID"
                                    autoComplete="off"
                                  />
                                  <div className="errorMsg">{errors.email}</div>
                                </div>

                                <div className="form-group">
                                  <input
                                    className="form-control"
                                    type="password"
                                    name="password"
                                    value={fields.password}
                                    onChange={this.handleChange}
                                    placeholder="Enter Password"
                                    autoComplete="off"
                                  />
                                  <div className="errorMsg">
                                    {errors.password}
                                  </div>
                                </div>

                                <div className="form-group">
                                  <input
                                    className="form-control"
                                    type="password"
                                    name="cpassword"
                                    value={fields.cpassword}
                                    onChange={this.handleChange}
                                    placeholder="Enter Confirm Password"
                                    autoComplete="off"
                                  />
                                  <div className="errorMsg">
                                    {errors.cpassword}
                                  </div>
                                </div>
                              </div>

                              <div className="button-box">
                                <button
                                  className="register-btn btn"
                                  type="submit"
                                >
                                  <span>Register</span>
                                </button>
                              </div>
                            </form>
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

export default Signup;
