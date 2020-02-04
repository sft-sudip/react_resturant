import React, { Component } from "react";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
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
          <PrivateRoute path="/user/dashboard" component={Dashboard} />
          <Route path="*" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default Routes;
