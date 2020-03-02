import React, { Component, Fragment, Suspense } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export class MyEditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloggedin: localStorage.getItem("isloggedin") === "true" ? true : false,
      fields: {},
      errors: {},
      isLoading: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.submitProfileForm = this.submitProfileForm.bind(this);
  }

  loading = () => <div className="cover-spin"></div>;

  handleChange = e => {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  };

  handleUpload = e => {
    let fields = this.state.fields;
    fields["image"] = e.target.files[0];
    this.setState({
      fields
    });
  };

  submitProfileForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let message = "Profile has updated successfully";

      toast.success(message, {
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

    if (!fields["firstname"]) {
      formIsValid = false;
      errors["firstname"] = "*Please enter your first name";
    }

    if (typeof fields["firstname"] !== "undefined") {
      if (!fields["firstname"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["firstname"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["lastname"]) {
      formIsValid = false;
      errors["lastname"] = "*Please enter your last name";
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
          <h3>Edit Profile</h3>
          <form
            id="profile-form"
            className="profile-form-box"
            method="post"
            name="UpdateProfileForm"
            onSubmit={this.submitProfileForm}
          >
            <div className="form-group row">
              <label for="inputEmail3" className="col-sm-3 col-form-label">
                First Name
              </label>
              <div className="col-sm-9">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter First Name"
                  name="firstname"
                  value={fields.firstname}
                  onChange={this.handleChange}
                  autoComplete="off"
                />
                <div className="errorMsg">{errors.firstname}</div>
              </div>
            </div>
            <div className="form-group row">
              <label for="inputPassword3" className="col-sm-3 col-form-label">
                Last Name
              </label>
              <div className="col-sm-9">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter Last Name"
                  name="lastname"
                  value={fields.lastname}
                  onChange={this.handleChange}
                  autoComplete="off"
                />
                <div className="errorMsg">{errors.lastname}</div>
              </div>
            </div>
            <div className="form-group row">
              <label for="inputPassword3" className="col-sm-3 col-form-label">
                Phone No
              </label>
              <div className="col-sm-9">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter Phone No"
                  name="phoneno"
                  value={fields.phoneno}
                  onChange={this.handleChange}
                  autoComplete="off"
                />
                <div className="errorMsg">{errors.phoneno}</div>
              </div>
            </div>
            <div className="form-group row">
              <label for="inputPassword3" className="col-sm-3 col-form-label">
                Email ID
              </label>
              <div className="col-sm-9">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter Email ID"
                  name="email"
                  value={fields.email}
                  onChange={this.handleChange}
                  autoComplete="off"
                />
                <div className="errorMsg">{errors.email}</div>
              </div>
            </div>
            <div className="form-group row">
              <label for="inputPassword3" className="col-sm-3 col-form-label">
                Image
              </label>
              <div className="col-sm-9">
                <input
                  className="form-control"
                  type="file"
                  name="file"
                  onChange={this.handleUpload}
                  autoComplete="off"
                />
                <div className="errorMsg">{errors.file}</div>
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
        <ToastContainer />
      </Fragment>
    );
  }
}

export default MyEditProfile;
