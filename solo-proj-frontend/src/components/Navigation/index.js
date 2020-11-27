import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import AuthButtons from "./AuthButtons";

const Navigation = ({ isLoaded }) => {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = <></>;
  }

  return (
    <ul>
      <li>
        <div className="nav-bar">
          {isLoaded && sessionLinks}
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/start-a-campaign">Start A Campaign</NavLink>
          {sessionUser && (
            <NavLink to={`/${sessionUser.username}/profile`}>
              {sessionUser.firstName}
            </NavLink>
          )}
          {!sessionUser && <AuthButtons />}
        </div>
      </li>
    </ul>
  );
};

export default Navigation;
