import React, { Component, Fragment, Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

const Routes = React.lazy(() => import("./components/Routes"));

function App() {
  return (
    <div>
      {/* <Router basename={"/onlineresturant"}> */}
      <Router>
        <Suspense fallback={<div className="cover-spin"></div>}>
          <Routes />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
