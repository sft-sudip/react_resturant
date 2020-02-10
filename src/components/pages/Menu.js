/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import Header from "../core/Header";
import Footer from "../core/Footer";
import MenuList from "./MenuList";
import * as apiService from "../global/service";

export class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      menus: []
    };
  }

  componentDidMount = () => {
    this.loadMenus();
  };

  loadMenus() {
    var params = "?page=2";
    apiService.getUserList(params).then(res => {
      // console.log("response ==>> ", res.data);
      // return false;
      this.setState({
        menus: res.data.data,
        loading: false
      });
    });
  }

  render() {
    const {loading,menus} = this.state;
    return (
      <div>
        <Header />
        {loading === true ? (
          <div className="cover-spin"></div>
        ) : (
          <div>
            <section className="section">
              <h2>Menu List</h2>
              <MenuList menus={menus} />
            </section>
          </div>
        )}
        <Footer />
      </div>
    );
  }
}

export default Menu;
