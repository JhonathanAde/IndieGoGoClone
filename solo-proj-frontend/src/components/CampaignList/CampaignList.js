import React from "react";

const CampaignList = ({ data }) => {
  return (
    <>
      <h1>{data.title}</h1>
      <img src={data.cardImage} alt="campaign-card-image" />
      <h3>Description</h3>
      <p>{data.description}</p>
      <p>{`${data.duration} Days left`}</p>
    </>
  );
};

export default CampaignList;
