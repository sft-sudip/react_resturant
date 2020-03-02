import React, { Component, Fragment, Suspense } from "react";
import { Button, Modal } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select from "react-select";

export class MyAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addressModal: false,
      isloggedin: localStorage.getItem("isloggedin") === "true" ? true : false,
      fields: {},
      errors: {},
      isLoading: false,
      addressTitle: "",
      countryOptions: [
        { value: "1", label: "India" },
        { value: "2", label: "Australia" },
        { value: "3", label: "England" }
      ],
      cityOptions: [
        { value: "1", label: "Kolkata" },
        { value: "2", label: "Tokyo" },
        { value: "3", label: "London" }
      ]
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitAddressForm = this.submitAddressForm.bind(this);
  }

  loading = () => <div className="cover-spin"></div>;

  handleChange = e => {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  };

  handleSelectChange = (type, selectedOption) => {
    let fields = this.state.fields;
    fields[type] = selectedOption;
    this.setState({
      fields
    });
  };

  submitAddressForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = this.state.fields;
      let message = "";
      if (fields["id"] != 0) {
        message = "Address has updated successfully";
      } else {
        message = "Addresss has added successfully";

        fields["firstname"] = "";
        fields["lastname"] = "";
        fields["phoneno"] = "";
        fields["email"] = "";
        fields["houseflatno"] = "";
        fields["localarea"] = "";
        fields["address"] = "";
        fields["pincode"] = "";
        fields["city"] = "";
        fields["country"] = "";

        this.setState({
          fields
        });
      }

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

    if (!fields["houseflatno"]) {
      formIsValid = false;
      errors["houseflatno"] = "*Please enter house / flat no.";
    }

    if (!fields["localarea"]) {
      formIsValid = false;
      errors["localarea"] = "*Please enter locality / area.";
    }

    if (!fields["address"]) {
      formIsValid = false;
      errors["address"] = "*Please enter full address.";
    }

    if (!fields["pincode"]) {
      formIsValid = false;
      errors["pincode"] = "*Please enter postal code.";
    }

    if (typeof fields["pincode"] !== "undefined") {
      if (!fields["pincode"].match(/^[0-9]{6}$/)) {
        formIsValid = false;
        errors["pincode"] = "*Please enter valid postal code.";
      }
    }

    if (!fields["city"]) {
      formIsValid = false;
      errors["city"] = "*Please select city.";
    }

    if (!fields["country"]) {
      formIsValid = false;
      errors["country"] = "*Please select country.";
    }

    this.setState({
      errors: errors
    });

    return formIsValid;
  }

  openAddressModal = id => {
    let fields = this.state.fields;
    let addressTitle = "";
    fields["id"] = id;

    if (id != 0) {
      addressTitle = "Edit Address";
      fields["firstname"] = "fff" + id;
      fields["lastname"] = "lll" + id;
      fields["phoneno"] = "987654321" + id;
      fields["email"] = "s@s.com" + id;
      fields["houseflatno"] = "hhh" + id;
      fields["localarea"] = "aaa" + id;
      fields["address"] = "kol" + id;
      fields["pincode"] = "74140" + id;
      fields["city"] = this.state.cityOptions[id - 1];
      fields["country"] = this.state.countryOptions[id - 1];
    } else {
      addressTitle = "Add New Address";
      fields["firstname"] = "";
      fields["lastname"] = "";
      fields["phoneno"] = "";
      fields["email"] = "";
      fields["houseflatno"] = "";
      fields["localarea"] = "";
      fields["address"] = "";
      fields["pincode"] = "";
      fields["city"] = "";
      fields["country"] = "";
    }

    this.setState({
      addressTitle: addressTitle,
      addressModal: true,
      fields
    });
  };

  closeAddressModal = () => {
    let errors = this.state.errors;
    errors["firstname"] = "";
    errors["lastname"] = "";
    errors["phoneno"] = "";
    errors["email"] = "";
    errors["houseflatno"] = "";
    errors["localarea"] = "";
    errors["address"] = "";
    errors["pincode"] = "";
    errors["city"] = "";
    errors["country"] = "";
    this.setState({
      addressModal: false,
      errors
    });
  };

  render() {
    const {
      isloggedin,
      isLoading,
      fields,
      errors,
      addressModal,
      addressTitle,
      countryOptions,
      cityOptions
    } = this.state;
    return (
      <Fragment>
        <Suspense fallback={this.loading()}>
          <div className="col-md-12 row add_adrs_box">
            <div className="col-md-6 text-left">
              <h4 className="billing-address">Delivery Address</h4>
            </div>
            <div className="col-md-6 text-right">
              <a className="view" onClick={this.openAddressModal.bind(this, 0)}>
                Add New Address
              </a>
            </div>
          </div>
          <div className="col-md-12 row adrs_box">
            <div className="col-md-10 adrs_box_left">
              <p>
                Akshya Nagar 1st Block 1st Cross, Rammurthy nagar,
                Bangalore-560016
              </p>
            </div>
            <div className="col-md-2">
              <a className="view" onClick={this.openAddressModal.bind(this, 1)}>
                edit
              </a>
            </div>
          </div>
          <div className="col-md-12 row adrs_box">
            <div className="col-md-10 adrs_box_left">
              <p>
                Akshya Nagar 1st Block 1st Cross, Rammurthy nagar,
                Bangalore-560016
              </p>
            </div>
            <div className="col-md-2">
              <a className="view" onClick={this.openAddressModal.bind(this, 2)}>
                edit
              </a>
            </div>
          </div>
          {addressModal && (
            <Modal
              size="lg"
              show={addressModal}
              onHide={this.closeAddressModal}
            >
              <form
                method="post"
                name="AddAddressForm"
                onSubmit={this.submitAddressForm}
              >
                <Modal.Header closeButton>
                  <Modal.Title>{addressTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="card card-body">
                    <div className="row">
                      <div className="col-lg-6">
                        <p className="single-form-row">
                          <label>
                            First Name <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Enter First Name"
                            name="firstname"
                            value={fields.firstname}
                            onChange={this.handleChange}
                            autoComplete="off"
                          />
                          <div className="errorMsg">{errors.firstname}</div>
                        </p>
                      </div>
                      <div className="col-lg-6">
                        <p className="single-form-row">
                          <label>
                            Last Name <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Enter Last Name"
                            name="lastname"
                            value={fields.lastname}
                            onChange={this.handleChange}
                            autoComplete="off"
                          />
                          <div className="errorMsg">{errors.lastname}</div>
                        </p>
                      </div>

                      <div className="col-lg-6">
                        <p className="single-form-row">
                          <label>
                            Phone No <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Enter Phone No"
                            name="phoneno"
                            value={fields.phoneno}
                            onChange={this.handleChange}
                            autoComplete="off"
                          />
                          <div className="errorMsg">{errors.phoneno}</div>
                        </p>
                      </div>
                      <div className="col-lg-6">
                        <p className="single-form-row">
                          <label>
                            Email ID <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Enter Email ID"
                            name="email"
                            value={fields.email}
                            onChange={this.handleChange}
                            autoComplete="off"
                          />
                          <div className="errorMsg">{errors.email}</div>
                        </p>
                      </div>

                      <div className="col-lg-6">
                        <p className="single-form-row">
                          <label>
                            City <span className="required">*</span>
                          </label>
                          <Select
                            value={fields.city}
                            onChange={this.handleSelectChange.bind(
                              this,
                              "city"
                            )}
                            placeholder="Select City"
                            options={cityOptions}
                          />
                          <div className="errorMsg">{errors.city}</div>
                        </p>
                      </div>
                      <div className="col-lg-6">
                        <p className="single-form-row">
                          <label>
                            Country <span className="required">*</span>
                          </label>
                          <Select
                            value={fields.country}
                            onChange={this.handleSelectChange.bind(
                              this,
                              "country"
                            )}
                            placeholder="Select Country"
                            options={countryOptions}
                          />
                          <div className="errorMsg">{errors.country}</div>
                        </p>
                      </div>

                      <div className="col-lg-6">
                        <p className="single-form-row">
                          <label>
                            House / Flat No
                            <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Enter House / Flat No"
                            name="houseflatno"
                            value={fields.houseflatno}
                            onChange={this.handleChange}
                            autoComplete="off"
                          />
                          <div className="errorMsg">{errors.houseflatno}</div>
                        </p>
                      </div>
                      <div className="col-lg-6">
                        <p className="single-form-row">
                          <label>
                            Locality / Area
                            <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Enter Locality / Area"
                            name="localarea"
                            value={fields.localarea}
                            onChange={this.handleChange}
                            autoComplete="off"
                          />
                          <div className="errorMsg">{errors.localarea}</div>
                        </p>
                      </div>

                      <div className="col-lg-6">
                        <p className="single-form-row">
                          <label>
                            Address <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Enter Address"
                            name="address"
                            value={fields.address}
                            onChange={this.handleChange}
                            autoComplete="off"
                          />
                          <div className="errorMsg">{errors.address}</div>
                        </p>
                      </div>
                      <div className="col-lg-6">
                        <p className="single-form-row">
                          <label>
                            Postal Code
                            <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Enter Postal Code"
                            name="pincode"
                            value={fields.pincode}
                            onChange={this.handleChange}
                            autoComplete="off"
                          />
                          <div className="errorMsg">{errors.pincode}</div>
                        </p>
                      </div>
                    </div>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={this.closeAddressModal}>
                    Close
                  </Button>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Modal.Footer>
              </form>
            </Modal>
          )}
        </Suspense>
        <ToastContainer />
      </Fragment>
    );
  }
}

export default MyAddress;
