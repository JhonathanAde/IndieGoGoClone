import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import ProfileNav from "../components/ProfileNav/ProfileNav";

const ProfilePage = () => {
  const user = useSelector((state) => state.session.user);

  return (
    <>
      <h1>
        {user.firstName} {user.lastName}
      </h1>
      <div>
        <ProfileNav />
      </div>
    </>
  );
};

export default ProfilePage;
