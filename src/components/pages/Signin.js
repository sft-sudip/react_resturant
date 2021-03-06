import React, { Component, Fragment, Suspense } from "react";
import Header from "../core/Header";
import Footer from "../core/Footer";
import { Redirect } from "react-router-dom";
import * as apiService from "../global/service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloggedin: localStorage.getItem("isloggedin") === "true" ? true : false,
      fields: {},
      errors: {},
      isLoading: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitLoginForm = this.submitLoginForm.bind(this);
  }

  loading = () => <div className="cover-spin"></div>;

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  }

  submitLoginForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      this.setState({ isLoading: true });
      var data = {
        email: "eve.holt@reqres.in",
        password: "pistol"
      };
      apiService.userLogin(data).then(res => {
        // console.log("response ==>> ", res);
        // return false;
        if (res.status === 200) {
          toast.success("Login Successfull!", {
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
                        <h2>Login</h2>
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form
                              method="post"
                              name="LoginForm"
                              onSubmit={this.submitLoginForm}
                            >
                              <div className="login-input-box">
                                <div className="form-group">
                                  <input
                                    className="form-control"
                                    type="text"
                                    name="email"
                                    value={fields.email}
                                    onChange={this.handleChange}
                                    placeholder="Enter Email"
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
                              </div>
                              <div className="button-box">
                                <div className="login-toggle-btn">
                                  <input type="checkbox" />
                                  <label>Remember me</label>
                                  <a href="javascript:void(0)">
                                    Forgot Password?
                                  </a>
                                </div>
                                <div className="button-box">
                                  <button
                                    className="login-btn btn"
                                    type="submit"
                                  >
                                    <span>Login</span>
                                  </button>
                                </div>
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

export default Signin;
