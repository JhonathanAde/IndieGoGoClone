import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const ProfilePage = () => {
  const user = useSelector((state) => state.session.user);

  return (
    <>
      <h1>
        {user.firstName} {user.lastName}
      </h1>
    </>
  );
};

export default ProfilePage;
