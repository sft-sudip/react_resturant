import React, { Component, Fragment, Suspense } from "react";
import Header from "../core/Header";
import Footer from "../core/Footer";
import * as apiService from "../global/service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloggedin: localStorage.getItem("isloggedin") === "true" ? true : false,
      fields: {},
      errors: {},
      isLoading: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitContactForm = this.submitContactForm.bind(this);
  }

  loading = () => <div className="cover-spin"></div>;

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  }

  submitContactForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      toast.success("Query has submitted successfully!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false
      });
    }
  }


  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "*Please enter your name";
    }

    if (typeof fields["name"] !== "undefined") {
      if (!fields["name"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["name"] = "*Please enter alphabet characters only.";
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

    if (!fields["subject"]) {
      formIsValid = false;
      errors["subject"] = "*Please enter your subject.";
    }

    if (!fields["message"]) {
      formIsValid = false;
      errors["message"] = "*Please enter your message.";
    }

    this.setState({
      errors: errors
    });

    return formIsValid;
  }



  render() {
    const { isloggedin, isLoading, fields, errors } = this.state;
    return (
      <div>
        <Header />
        <Fragment>
          <Suspense fallback={this.loading()}>
            <div className="innerbanner">
              <div className="container">
                <div className="row">
                  <h2>Contact Us</h2>
                  <div className="col-12">
                    <ul className="breadcrumb-list">
                      <li className="breadcrumb-item">
                        <a href="javascript:void(0)">Home</a>
                      </li>
                      <li className="breadcrumb-item active">Contact Us</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="main-content-wrap contact-wrap">
              <div className="contact-form-area section-ptb">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="contact-info-wrap">
                        <div className="contact-title mb-30">
                          <h3>Contact Us</h3>
                        </div>
                        <div className="contact-info-text">
                          <ul>
                            <li>
                              <div className="contact-title">
                                <i className="fa fa-home"></i>
                                <h4>Address</h4>
                              </div>
                              <p>
                                123 Dummy text is text that is used in the
                                publishing
                              </p>
                            </li>
                            <li>
                              <div className="contact-title">
                                <i className="fa fa-phone"></i>
                                <h4>Phone</h4>
                              </div>
                              <p>
                                Mobile: (08) 123 456 789
                                <br />
                                Helpline: 1009 678 456
                              </p>
                            </li>
                            <li>
                              <div className="contact-title">
                                <i className="fa fa-envelope-open-o"></i>
                                <h4>Email</h4>
                              </div>
                              <p>
                                <a href="javascript:void(0)">
                                  yourmail@gmail.com
                                </a>
                                <br />
                                <a href="javascript:void(0)">
                                  support@gmail.com
                                </a>
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-7 offset-lg-1">
                      <div className="contact-info-wrap">
                        <div className="contact-title mb-30">
                          <h5>Tell Us Your Message</h5>
                        </div>

                        <div className="contact-us-from-wrap">
                          <form
                            id="contact-form"
                            className="contact-us-box"
                            method="post"
                            name="ContactForm"
                            onSubmit={this.submitContactForm}
                          >
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="single-input">
                                  <label> Your Name</label>
                                  <input
                                    className="form-control"
                                    type="text"
                                    name="name"
                                    value={fields.name}
                                    onChange={this.handleChange}
                                    placeholder="Enter Your Full Name"
                                    autoComplete="off"
                                  />
                                  <div className="errorMsg">
                                    {errors.name}
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="single-input">
                                  <label> Your Email</label>
                                  <input
                                    className="form-control"
                                    type="text"
                                    name="email"
                                    value={fields.email}
                                    onChange={this.handleChange}
                                    placeholder="Enter Your Email ID"
                                    autoComplete="off"
                                  />
                                  <div className="errorMsg">
                                    {errors.email}
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="single-input">
                                  <label>Subject</label>
                                  <input
                                    className="form-control"
                                    type="text"
                                    name="subject"
                                    value={fields.subject}
                                    onChange={this.handleChange}
                                    placeholder="Enter Subject"
                                    autoComplete="off"
                                  />
                                  <div className="errorMsg">
                                    {errors.subject}
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="single-input">
                                  <label>Your Meassage</label>
                                  <textarea
                                    className="form-control"
                                    type="text"
                                    name="message"
                                    value={fields.message}
                                    onChange={this.handleChange}
                                    placeholder="Enter Your Message"
                                    autoComplete="off"
                                  />
                                  <div className="errorMsg">
                                    {errors.message}
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="single-input">
                                  <button
                                    className="submit-button submit-btn"
                                    type="submit"
                                  >
                                    Send
                                  </button>
                                </div>
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
          </Suspense>
        </Fragment>
        <Footer />
        <ToastContainer />
      </div>
    );
  }
}

export default Contact;
