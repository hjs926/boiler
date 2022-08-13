import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import LandingPage from "./componets/views/LandingPage/LandingPage";
import LoginPage from "./componets/views/LoginPage/LoginPage";
import RegisterPage from "./componets/views/RegisterPage/RegisterPage";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/Register" component={RegisterPage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
