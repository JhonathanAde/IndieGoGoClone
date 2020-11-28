import React from "react";
import BasicInfo from "./StartACampaignComponents/BasicInfo";
import Contents from "./StartACampaignComponents/Contents";
import Perks from "./StartACampaignComponents/Perks";
import "./StartACampaignComponents/StartCampaign.css"


const StartACampaign = () => {
  return (
    <>
      <div className="campaign-page-header">
        <h1>Start A Campaign</h1>
      </div>
      <div className="campaign-details">
        <BasicInfo />
        <Contents />
        <Perks />
      </div>
    </>
  );
};

export default StartACampaign;
