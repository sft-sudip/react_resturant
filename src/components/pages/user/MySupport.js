import React, { Component, Fragment, Suspense } from "react";
import { ToastContainer, toast } from "react-toastify";

export class MySupport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloggedin: localStorage.getItem("isloggedin") === "true" ? true : false,
      fields: {},
      errors: {},
      isLoading: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitSupportForm = this.submitSupportForm.bind(this);
  }

  loading = () => <div className="cover-spin"></div>;

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  }

  submitSupportForm(e) {
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

      let fields = this.state.fields;
      fields["email"] = "";
      fields["phoneno"] = "";
      fields["message"] = "";

      this.setState({
        fields
      });
    }
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "*Please enter email-ID.";
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
      <Fragment>
        <Suspense fallback={this.loading()}>
          <h3>Customer Support</h3>
          <form
            id="support-form"
            className="support-form-box"
            method="post"
            name="SupportForm"
            onSubmit={this.submitSupportForm}
          >
            <div className="form-group row">
              <label for="inputEmail3" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  id="inputEmail3"
                  type="text"
                  name="email"
                  value={fields.email}
                  onChange={this.handleChange}
                  placeholder="Enter Your Email ID"
                  autoComplete="off"
                />
                <div className="errorMsg">{errors.email}</div>
              </div>
            </div>
            <div className="form-group row">
              <label for="inputPassword3" className="col-sm-2 col-form-label">
                Contact Number
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  id="inputPassword3"
                  type="text"
                  name="phoneno"
                  value={fields.phoneno}
                  onChange={this.handleChange}
                  placeholder="Enter Phone No"
                  autoComplete="off"
                />
                <div className="errorMsg">{errors.phoneno}</div>
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
                  name="message"
                  value={fields.message}
                  onChange={this.handleChange}
                  placeholder="Enter Your Message"
                  autoComplete="off"
                />
                <div className="errorMsg">{errors.message}</div>
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
        <ToastContainer />
      </Fragment>
    );
  }
}

export default MySupport;
