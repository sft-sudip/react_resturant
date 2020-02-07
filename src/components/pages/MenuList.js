/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import * as apiService from "../global/service";

export class MenuList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("menus ==>> ", this.props.menus);
    let menus;
    if (this.props.menus) {
      menus = this.props.menus.map((menu, index) => {
        return (
        <li key={index} className="list-group-item">
            <span><img width="50" alt="menu" src={menu.avatar} /></span>
            <span>{menu.email}</span>
        </li>
        );
      });
    }

    return (
      <div>
        <section className="section">
          <ul className="list-group">{menus}</ul>
        </section>
      </div>
    );
  }
}

export default MenuList;
