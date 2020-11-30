import React, { useState } from "react";
import BasicInfo from "./StartACampaignComponents/BasicInfo";
import Contents from "./StartACampaignComponents/Contents";
import Perks from "./StartACampaignComponents/Perks";
import "./StartACampaignComponents/StartCampaign.css";

const StartACampaign = () => {
  const [firstStep, setFirstStep] = useState({
    step: 1,
    title: "",
    description: "",
    cardImage: "",
    duration: "",
  });

  const [secondStep, setSecondStep] = useState({
    step: 2,
    content: "",
    campaignId: "",
    overlay: "",
    story: "",
  });

  // go to the next step
  const nextStep = () => {
    const {step} = firstStep
    setFirstStep({
      step: step + 1
    })
  }

  // go to previous step
  const prevStep = () => {
    const {step} = firstStep
    setFirstStep({
      step: step - 1
    })
  }

  const changeHandler = (input) => e => {
    
  } 


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
