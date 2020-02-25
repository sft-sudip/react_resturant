import React, { Component, Fragment, Suspense } from "react";

export class MyEditProfile extends Component {
  constructor(props) {
    super(props);
  }

  loading = () => <div className="cover-spin"></div>;

  render() {
    return (
      <Fragment>
        <Suspense fallback={this.loading()}>
          <h3>Edit Profile</h3>
          <div className="login">
            <div className="login-form-container">
              <div className="account-login-form">
                <form action="#">
                  <p>
                    Already have an account?
                    <a href="javascript:void(0)">Log in instead!</a>
                  </p>
                  <label>Social title</label>
                  <div className="input-radio">
                    <span className="custom-radio">
                      <input type="radio" value="1" name="id_gender" />
                      Mr.
                    </span>
                    <span className="custom-radio">
                      <input type="radio" value="1" name="id_gender" />
                      Mrs.
                    </span>
                  </div>
                  <div className="account-input-box">
                    <label>First Name</label>
                    <input type="text" name="first-name" />
                    <label>Last Name</label>
                    <input type="text" name="last-name" />
                    <label>Phone Number</label>
                    <input type="text" name="Phone-Number" />
                    <label>OTP</label>
                    <input type="text" name="OTP" />
                    <label>Email</label>
                    <input type="text" name="email-name" />
                    <label>Password</label>
                    <input type="password" name="user-password" />
                    <label>Confirm Password</label>
                    <input type="password" name="user-password" />
                  </div>
                  <div className="custom-checkbox">
                    <input type="checkbox" value="1" name="optin" />
                    <label>Receive offers from our partners</label>
                  </div>
                  <div className="custom-checkbox">
                    <input type="checkbox" value="1" name="newsletter" />
                    <label>
                      Sign up for our newsletter
                      <br />
                      <em>
                        You may unsubscribe at any moment. For that purpose,
                        please find our contact info in the legal notice.
                      </em>
                    </label>
                  </div>
                  <div className="button-box">
                    <button className="btn default-btn" type="submit">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Suspense>
      </Fragment>
    );
  }
}

export default MyEditProfile;
