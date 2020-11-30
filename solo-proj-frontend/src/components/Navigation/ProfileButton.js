import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import "./ProfileButton.css";

const ProfileButton = ({ user }) => {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <div className="user-button">
      <button className="user-menu-button" onClick={openMenu}>
        <i className="fas fa-user-cirle" />
        {user.firstName}
      </button>
      {showMenu && (
        <div className="profile-dropdown">
          <ul>
            <li>
              <NavLink to={`/${user.username}/profile`}>Profile</NavLink>
            </li>
            <li>
              <NavLink to={`/${user.username}/my-campaigns`}>
                My Campaigns
              </NavLink>
            </li>
            <li>
              <button onClick={logout}>Log Out</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileButton;
