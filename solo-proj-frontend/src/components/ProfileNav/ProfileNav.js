import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const ProfileNav = () => {
  const user = useSelector((state) => state.session.user);

  return (
    <>
      <NavLink to={`/${user.username}`}>Profile</NavLink>
      <NavLink to={`/${user.username}/my-campaigns`}>My Campaigns</NavLink>
      <NavLink to={`/${user.username}/contributions`}>Contributions</NavLink>
    </>
  );
};

export default ProfileNav;
