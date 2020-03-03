/* eslint-disable no-unused-expressions */
import React, { Component, Fragment, Suspense } from "react";
import Header from "../core/Header";
import Footer from "../core/Footer";
import * as apiService from "../global/service";
import { Button, Modal } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloggedin: localStorage.getItem("isloggedin") === "true" ? true : false,
      fields: {},
      errors: {},
      isLoading: false,
      addressModal: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitAddressForm = this.submitAddressForm.bind(this);
    this.submitCheckoutForm = this.submitCheckoutForm.bind(this);
  }

  loading = () => <div className="cover-spin"></div>;

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  }

  submitAddressForm(e) {
    e.preventDefault();
    if (this.validateAddressForm()) {
      let fields = this.state.fields;
      let message = "";
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

  validateAddressForm() {
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

  submitCheckoutForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      toast.success("Order has placed successfully!", {
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

    if (this.state.isloggedin) {
      if (!fields["dvaddress"]) {
        formIsValid = false;
        errors["dvaddress"] =
          "*Please select delivery address or add new address";
      }
    } else {
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
    }

    this.setState({
      errors: errors
    });

    return formIsValid;
  }

  openAddressModal = () => {
    let fields = this.state.fields;
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
    const { isloggedin, isLoading, addressModal, fields, errors } = this.state;
    let wqaddress;
    if (isloggedin === true) {
      wqaddress = (
        <div>
          <div className="col-md-12 row adrs_box_check">
            <div className="col-md-1">
              <label>
                <input
                  type="radio"
                  name="dvaddress"
                  value="option1"
                  checked={fields.dvaddress === "option1"}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div className="col-md-11 adrs_box_left">
              <p>
                Akshya Nagar 1st Block 1st Cross, Rammurthy nagar,
                Bangalore-560016 Akshya Nagar 1st Block 1st Cross, Rammurthy
                nagar, Bangalore-560016
              </p>
            </div>
          </div>
          <div className="col-md-12 row adrs_box_check">
            <div className="col-md-1">
              <label>
                <input
                  type="radio"
                  name="dvaddress"
                  value="option2"
                  checked={fields.dvaddress === "option2"}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div className="col-md-11 adrs_box_left">
              <p>
                Akshya Nagar 1st Block 1st Cross, Rammurthy nagar,
                Bangalore-560016 Akshya Nagar 1st Block 1st Cross, Rammurthy
                nagar, Bangalore-560016
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      wqaddress = (
        <div className="row">
          <div className="col-lg-6">
            <p className="single-form-row">
              <label>
                First name <span className="required">*</span>
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

          <div className="col-lg-6">
            <p className="single-form-row">
              <label>
                City <span className="required">*</span>
              </label>
              <div class="nice-select wide">
                <select name="city" onChange={this.handleChange}>
                  <option value="">Select City</option>
                  <option value="1">Kolkata</option>
                  <option value="2">Bangalore</option>
                  <option value="3">Chennai</option>
                </select>
              </div>
              <div className="errorMsg">{errors.city}</div>
            </p>
          </div>
          <div className="col-lg-6">
            <p className="single-form-row">
              <label>
                Country <span className="required">*</span>
              </label>
              <div class="nice-select wide">
                <select name="country" onChange={this.handleChange}>
                  <option value="">Select Country</option>
                  <option value="1">India</option>
                  <option value="2">Australia</option>
                  <option value="3">England</option>
                </select>
              </div>
              <div className="errorMsg">{errors.country}</div>
            </p>
          </div>

          <div className="col-lg-12">
            <p className="single-form-row m-0">
              <label>Order Notes</label>
              <textarea
                className="checkout-mess"
                name="notes"
                value={fields.notes}
                onChange={this.handleChange}
                placeholder="Enter Notes About Your Order"
              />
            </p>
          </div>
        </div>
      );
    }
    return (
      <div className="main-wrapper">
        <Header />
        <Fragment>
          <Suspense fallback={this.loading()}>
            <div className="innerbanner">
              <div className="container">
                <div className="row">
                  <h2>Checkout</h2>
                  <div className="col-12">
                    <ul className="breadcrumb-list">
                      <li className="breadcrumb-item">
                        <a href="javascript:void(0)">Home</a>
                      </li>
                      <li className="breadcrumb-item active">Checkout</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="main-content-wrap section-ptb checkout-page">
              <div className="container">
                {!isloggedin && (
                  <div className="row">
                    <div className="col">
                      <div className="coupon-area">
                        <div className="coupon-accordion">
                          <h3>
                            Returning customer?
                            <span className="coupon" id="showlogin">
                              Click here to login
                            </span>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <form
                  method="post"
                  name="CheckoutForm"
                  onSubmit={this.submitCheckoutForm}
                >
                  <div className="checkout-details-wrapper">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-details-wrap">
                          <div className="col-md-12">
                            <div className="row">
                              <div className="col-md-8 text-left">
                                <h3 className="shoping-checkboxt-title">
                                  Address Details
                                </h3>
                              </div>
                              <div className="col-md-4 text-right">
                                <a
                                  className="view"
                                  onClick={this.openAddressModal}
                                >
                                  Add New Address
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="errorMsg">{errors.dvaddress}</div>
                          {wqaddress}
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="your-order-wrapper">
                          <h3 className="shoping-checkboxt-title">
                            Your Order
                          </h3>
                          <div className="your-order-wrap">
                            <div className="your-order-table table-responsive">
                              <table>
                                <thead>
                                  <tr>
                                    <th className="product-name">Product</th>
                                    <th className="product-total">Total</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="cart_item">
                                    <td className="product-name">
                                      Vestibulum suscipit
                                      <strong className="product-quantity">
                                        × 1
                                      </strong>
                                    </td>
                                    <td className="product-total">
                                      <span className="amount">560.00</span>
                                    </td>
                                  </tr>
                                  <tr className="cart_item">
                                    <td className="product-name">
                                      Vestibulum magna
                                      <strong className="product-quantity">
                                        × 1
                                      </strong>
                                    </td>
                                    <td className="product-total">
                                      <span className="amount">440.00</span>
                                    </td>
                                  </tr>
                                </tbody>
                                <tfoot>
                                  <tr className="order-total">
                                    <th>Order Total</th>
                                    <td>
                                      <strong>
                                        <span className="amount">1000.00</span>
                                      </strong>
                                    </td>
                                  </tr>
                                </tfoot>
                              </table>
                            </div>
                            <div className="payment-method">
                              <div className="order-button-payment">
                                <input type="submit" value="Place order" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
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
                    <Modal.Title>Add New Address</Modal.Title>
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
                            <select name="city" onChange={this.handleChange}>
                              <option value="">Select City</option>
                              <option value="1">Kolkata</option>
                              <option value="2">Bangalore</option>
                              <option value="3">Chennai</option>
                            </select>
                            <div className="errorMsg">{errors.city}</div>
                          </p>
                        </div>
                        <div className="col-lg-6">
                          <p className="single-form-row">
                            <label>
                              Country <span className="required">*</span>
                            </label>
                            <select name="country" onChange={this.handleChange}>
                              <option value="">Select Country</option>
                              <option value="1">India</option>
                              <option value="2">Australia</option>
                              <option value="3">England</option>
                            </select>
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
                    <Button
                      variant="secondary"
                      onClick={this.closeAddressModal}
                    >
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
        </Fragment>
        <Footer />
        <ToastContainer />
      </div>
    );
  }
}

export default Cart;
