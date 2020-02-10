import React, { Component } from "react";
import Header from "../core/Header";
import Footer from "../core/Footer";
import { Redirect } from "react-router-dom";
import * as apiService from "../global/service";
import SimpleReactValidator from "simple-react-validator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloggedin: localStorage.getItem("isloggedin") === "true" ? true : false,
      fields: {}
    };
    this.validator = new SimpleReactValidator({
      autoForceUpdate: this,
      element: message => <div className="errorMsg">{message}</div>,
      messages: {
        in: "Password & Confirm Password Does Not Match"
      }
    });

    this.handleChange = this.handleChange.bind(this);
    this.submitRegisterForm = this.submitRegisterForm.bind(this);
  }

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  }

  submitRegisterForm(e) {
    e.preventDefault();
    if (this.validator.allValid()) {
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
    } else {
      this.validator.showMessages();
    }
  }

  render() {
    const {isloggedin} = this.state;
    if (isloggedin === true) {
      return <Redirect to="/user/dashboard" />;
    }

    return (
      <div>
        <Header />
        <section className="section">
          <h2>Signup</h2>

          <div className="form-group">
            <label>First Name</label>
            <input
              className="form-control"
              type="text"
              name="firstname"
              value={this.state.fields.firstname}
              onChange={this.handleChange}
              onBlur={() => this.validator.showMessageFor("firstname")}
            />
            {this.validator.message(
              "firstname",
              this.state.fields.firstname,
              "required|alpha"
            )}
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              className="form-control"
              type="text"
              name="lastname"
              value={this.state.fields.lastname}
              onChange={this.handleChange}
              onBlur={() => this.validator.showMessageFor("lastname")}
            />
            {this.validator.message(
              "lastname",
              this.state.fields.lastname,
              "required|alpha"
            )}
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              className="form-control"
              type="text"
              name="phoneno"
              value={this.state.fields.phoneno}
              onChange={this.handleChange}
              onBlur={() => this.validator.showMessageFor("phoneno")}
            />
            {this.validator.message(
              "phoneno",
              this.state.fields.phoneno,
              "required|phone"
            )}
          </div>

          <div className="form-group">
            <label>Email ID</label>
            <input
              className="form-control"
              type="text"
              name="email"
              value={this.state.fields.email}
              onChange={this.handleChange}
              onBlur={() => this.validator.showMessageFor("email")}
            />
            {this.validator.message(
              "email",
              this.state.fields.email,
              "required|email"
            )}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              className="form-control"
              type="password"
              name="password"
              value={this.state.fields.password}
              onChange={this.handleChange}
              onBlur={() => this.validator.showMessageFor("password")}
            />
            {this.validator.message("password", this.state.fields.password, [
              "require",
              {
                regex: /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
              }
            ])}
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              className="form-control"
              type="password"
              name="cpassword"
              value={this.state.fields.cpassword}
              onChange={this.handleChange}
              onBlur={() => this.validator.showMessageFor("cpassword")}
            />
            {this.validator.message("cpassword", this.state.fields.cpassword, [
              "require",
              { in: this.state.fields.password }
            ])}
          </div>

          <button className="btn btn-primary" onClick={this.submitRegisterForm}>
            Register
          </button>
        </section>
        <Footer />
        <ToastContainer />
      </div>
    );
  }
}

export default Signup;
