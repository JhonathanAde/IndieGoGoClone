import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import HomePage from "./Pages/HomePage";
import StartACampaign from "./Pages/StartACampaign";
import LoginFormPage from "./components/LoginFormPage";
import ProfilePage from "./Pages/ProfilePage";
import MyCampaign from "./Pages/MyCampaigns";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const user = useSelector((state) => state.session.user);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route exact path="/start-a-campaign">
            <StartACampaign />
          </Route>
          <Route exact path={`/${user.username}/my-campaigns`}>
            <MyCampaign />
          </Route>
          <Route exact path={`/${user.username}`}>
            <ProfilePage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
