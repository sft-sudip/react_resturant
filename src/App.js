import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Switch
} from "react-router-dom";

function App() {
  return (
    <div>
      {/* <Router basename={"/react_resturant"}> */}
      <Router>
        <Header />

        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path='*' component={Home} />
          </Switch>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
