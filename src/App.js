import React from "react";
import Routes from "./components/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      {/* <Router basename={"/react_resturant"}> */}
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
