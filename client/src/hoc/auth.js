import React from "react";
import { Axios } from "axios";
import { useDispatch } from "react-redux";
import { auth } from "../_actions/user.action";
import { useEffect } from "react";

export default function(SpecifiComponent, option, adimRoute = null) {
  function AuthenticationCheck(props) {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(auth()).then((response) => {});
    }, []);
  }

  return AuthenticationCheck;
}
