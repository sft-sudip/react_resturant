import React, { Component, Suspense } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Menu from "./pages/Menu";
import MenuDetail from "./pages/MenuDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Thankyou from "./pages/Thankyou";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./auth/PrivateRoute";
import { Route, Switch } from "react-router-dom";

export class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/menu-detail" component={MenuDetail} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/thankyou" component={Thankyou} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Signin} />
        <PrivateRoute exact path="/user/dashboard" component={Dashboard} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    );
  }
}

export default Routes;
