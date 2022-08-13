import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingPage from "./componets/views/LandingPage/LandingPage";
import LoginPage from "./componets/views/LoginPage/LoginPage";
import RegisterPage from "./componets/views/RegisterPage/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/Login" element={<LoginPage />}></Route>
          <Route path="/Register" element={<RegisterPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
