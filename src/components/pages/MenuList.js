/* eslint-disable no-unused-expressions */
import React, { Component } from "react";

const MenuList = (props) => {
  let menus;
  if (props.menus) {
    menus = props.menus.map((menu, index) => {
      return (
        <li key={index} className="list-group-item">
          <span>
            <img width="50" alt="menu" src={menu.avatar} />
          </span>
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
};

export default MenuList;
