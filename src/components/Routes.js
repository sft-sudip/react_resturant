import React, { Component } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Menu from "./pages/Menu";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from './auth/PrivateRoute';
import { Route, Switch } from "react-router-dom";

export class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="/menu" component={Menu} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/user/dashboard" component={Dashboard} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default Routes;
