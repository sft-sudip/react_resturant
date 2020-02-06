import React, { Component } from "react";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Product from "./pages/Product";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from './auth/PrivateRoute';
import { Route, Switch } from "react-router-dom";

export class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/product" component={Product} />
          <PrivateRoute path="/user/dashboard" component={Dashboard} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default Routes;
