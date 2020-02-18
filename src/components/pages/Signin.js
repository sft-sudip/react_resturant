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
      errors: {}
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
      var data = {
        email: "eve.holt@reqres.in",
        password: "pistol"
      };
      apiService.userLogin(data).then(res => {
        // console.log("response ==>> ", res);
        // return false;
        if (res.status === 200) {
          toast.info("Login Successfull!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
          });
          // setTimeout(
          //   function() {
          //     this.setState(
          //       {
          //         isloggedin: true
          //       },
          //       () => {
          //         localStorage.setItem("isloggedin", true);
          //         localStorage.setItem("userData", res.data);
          //         this.props.history.push("/user/dashboard");
          //       }
          //     );
          //   }.bind(this),
          //   2000
          // );
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
              name="LoginForm"
              onSubmit={this.submitLoginForm}
            >
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
              <input
                type="submit"
                className="btn btn-primary"
                value="Login"
              />
            </form>
          </Suspense>
        </Fragment>
        <Footer />
        <ToastContainer />
      </div>
    );
  }
}

export default Signin;
