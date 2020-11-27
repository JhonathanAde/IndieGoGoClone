import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const ProfileNav = () => {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <>
      <NavLink to={`/${sessionUser.username}/profile`}>Profile</NavLink>
      <NavLink to={`/${sessionUser.username}/my-campaigns`}>
        My Campaigns
      </NavLink>
      <NavLink to={`/${sessionUser.username}/contributions`}>
        Contributions
      </NavLink>
    </>
  );
};

export default ProfileNav;
