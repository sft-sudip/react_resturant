/* eslint-disable no-unused-expressions */
import React, { Component, Fragment, Suspense } from "react";
import Header from "../core/Header";
import Footer from "../core/Footer";
import MenuList from "./MenuList";
import * as apiService from "../global/service";
import Pagination from "react-js-pagination";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: [],
      activePage: 1,
      isloggedin: localStorage.getItem("isloggedin") === "true" ? true : false,
      isLoading: false
    };
    this.handlePageChange = this.handlePageChange.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  loading = () => <div className="cover-spin"></div>;

  handlePageChange = pageNumber => {
    this.setState({ isLoading: true });
    var params = "?page=" + pageNumber;
    apiService.getUserList(params).then(res => {
      // console.log("response ==>> ", res.data);
      // return false;
      this.setState({
        menus: res.data.data,
        activePage: pageNumber,
        isLoading: false
      });
    });
  };

  addToCart = id => {
    toast.success("Menu has added in Cart", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false
    });
  };

  componentDidMount = () => {
    this.loadMenus();
  };

  loadMenus() {
    this.setState({ isLoading: true });
    var params = "?page=1";
    apiService.getUserList(params).then(res => {
      // console.log("response ==>> ", res.data);
      // return false;
      this.setState({
        menus: res.data.data,
        isLoading: false
      });
    });
  }

  render() {
    const { menus, activePage, isLoading } = this.state;
    console.log("Menus==>>", menus);

    return (
      <div className="main-wrapper">
        {isLoading ? <div className="cover-spin"></div> : ""}
        <Header />
        <Fragment>
          <Suspense fallback={this.loading()}>
            <div className="innerbanner">
              <div className="container">
                <div className="row">
                  <h2>Our Menu</h2>
                  <div className="col-12">
                    <ul className="breadcrumb-list">
                      <li className="breadcrumb-item">
                        <a href="javascript:void(0)">Home</a>
                      </li>
                      <li className="breadcrumb-item active">Our Menu</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="main-content-wrap shop-page section-ptb">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <MenuList addToCart={this.addToCart} menus={menus} />
                    <div className="paginatoin-area">
                      <div className="row">
                        <div className="col-lg-12 col-md-12">
                          {!isLoading && (
                            <Pagination
                              prevPageText="Prev"
                              nextPageText="Next"
                              firstPageText="First"
                              lastPageText="Last"
                              activePage={activePage}
                              itemsCountPerPage={6}
                              totalItemsCount={12}
                              pageRangeDisplayed={3}
                              onChange={this.handlePageChange}
                              itemClass="page-item"
                              linkClass="page-link"
                            />
                          )}
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

export default Menu;
