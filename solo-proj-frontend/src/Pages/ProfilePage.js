import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import ProfileNav from "../components/ProfileNav/ProfileNav";

const ProfilePage = () => {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <>
      <h1>
        {sessionUser.firstName} {sessionUser.lastName}
      </h1>
      <div>
        <ProfileNav />
      </div>
    </>
  );
};

export default ProfilePage;
