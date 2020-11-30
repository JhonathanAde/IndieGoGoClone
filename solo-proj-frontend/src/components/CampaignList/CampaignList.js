import React from "react";
import "../CampaignList/CampaignList.css";

const CampaignList = ({ data }) => {
  return (
    <>
      <div className="campaign-card">
        <h1>{data.title}</h1>
        <div className="campaign-card__image-box">
          <img
            className="campaign-card__image-box_image"
            src={data.cardImage}
            alt="campaign-card-image"
            height="190px"
            width="290px"
          />
        </div>
        <div className="campaign-card__details">
          <h3>Description</h3>
          <p>{data.description}</p>
          <p>{`${data.duration} Days left`}</p>
        </div>
      </div>
    </>
  );
};

export default CampaignList;
