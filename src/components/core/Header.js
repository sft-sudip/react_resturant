import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloggedin: sessionStorage.getItem("isloggedin") === "true" ? true : false
    };
  }

  render() {
    if (this.state.isloggedin === false) {
      return (
        <div>
          <header>
            <div className="header">
              <h2>Header Without Login</h2>
            </div>
          </header>
        </div>
      );
    } else {
      return (
        <div>
          <header>
            <div className="header">
              <h2>Header With Login</h2>
            </div>
          </header>
        </div>
      );
    }
  }
}

export default Header;
