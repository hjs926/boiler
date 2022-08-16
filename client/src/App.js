import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingPage from "./componets/views/LandingPage/LandingPage";
import LoginPage from "./componets/views/LoginPage/LoginPage";
import RegisterPage from "./componets/views/RegisterPage/RegisterPage";
import Auth from "./hoc/auth";

//null -> 아무나 출입 가능
// true -> 로그인한 유저만 출입 가능
//false -> 로그인한 유저는 출입 불가능
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={Auth(<LandingPage />, null)}></Route>
          <Route path="/Login" element={Auth(<LoginPage />, false)}></Route>
          <Route
            path="/Register"
            element={Auth(<RegisterPage />, false)}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
