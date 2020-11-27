import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
// import LoginFormModal from "../LoginFormModal";
import LoginFormPage from "../LoginFormPage";
// import LoginFormPage from "../LoginFormPage";

const AuthButtons = () => {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <div className="auth-buttons">
      <NavLink to="/login">
        <button> Login </button>
      </NavLink>
      <NavLink className="auth-buttons__signup" to="/signup">
        Sign Up
      </NavLink>
    </div>
  );
};

export default AuthButtons;
