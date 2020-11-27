import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CampaignList from "../components/CampaignList/CampaignList";
import ProfileNav from "../components/ProfileNav/ProfileNav";
import { getAllCampaigns } from "../store/campaign";

const MyCampaign = () => {
  const dispatch = useDispatch();
  const campaigns = useSelector((state) => state.campaign.campaigns);

  useEffect(() => {
    const loadCampaigns = async () => {
      dispatch(getAllCampaigns());
    };
    loadCampaigns();
  }, [dispatch]);

  return (
    <>
      <h1>My campaigns</h1>
      <div>
        <ProfileNav />
      </div>
      {campaigns.map((campaign, index) => {
        return <CampaignList key={index} data={campaign} />;
      })}
    </>
  );
};

export default MyCampaign;
