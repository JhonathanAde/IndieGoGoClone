import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Switch } from "react-router-dom";
import CampaignList from "../components/CampaignList/CampaignList";
import { getAllCampaigns } from "../store/campaign";

const HomePage = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const campaigns = useSelector((state) => state.campaign.campaigns);

  useEffect(() => {
    if (sessionUser) {
      const loadCampaigns = async () => {
        dispatch(getAllCampaigns());
      };
      loadCampaigns();
    }
  }, [dispatch]);

  return (
    <>
      <h1>HomePage</h1>
      {campaigns.map((campaign, index) => {
        return <CampaignList key={index} data={campaign} />;
      })}
      {!sessionUser && (
        <>
          <h1>Welcome!</h1>
          <p>This is a test for new users</p>
        </>
      )}
    </>
  );
};

export default HomePage;
