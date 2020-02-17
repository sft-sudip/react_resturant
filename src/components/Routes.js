import React, { Component, Suspense } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Menu from "./pages/Menu";
import MenuDetail from "./pages/MenuDetail";
import Cart from "./pages/Cart";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./auth/PrivateRoute";
import { Route, Switch } from "react-router-dom";

export class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/menu" component={Menu} />
        <Route path="/menu-detail" component={MenuDetail} />
        <Route path="/cart" component={Cart} />
        <Route path="*" component={NotFound} />
        {/* <Route exact path="/about" component={About} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <PrivateRoute path="/user/dashboard" component={Dashboard} />
        <Route path="*" component={NotFound} /> */}
      </Switch>
    );
  }
}

export default Routes;
