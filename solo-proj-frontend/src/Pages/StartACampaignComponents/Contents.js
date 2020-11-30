// Imports
/* ***********************************************************/

import { useState, useEffect } from "react";
import React from "react";
import "./Contents.css";
import { useDispatch, useSelector } from "react-redux";
import { addContent, addNewContent } from "../../store/content.js";
import { getAllCampaigns } from "../../store/campaign.js";

const Contents = () => {
  const dispatch = useDispatch();

  // Hooks
  /* ********************************************************/

  const [content, setContent] = useState("");
  const [overlay, setOverlay] = useState("");
  const [story, setStory] = useState("");
  const [errors, setErrors] = useState([]);

  // Selectors
  /* *******************************************************/

  const campaigns = useSelector((state) => state.campaign.campaigns);

  // Methods
  /* *******************************************************/

  const handleSubmit = (e) => {
    e.preventDefault();
    if (campaigns.length) {
      const latestCampaign = campaigns[campaigns.length - 1];
      const { id } = latestCampaign;
      console.log(id);
      dispatch(addNewContent(content, id, overlay, story)).catch((res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      });
    } else {
      return setErrors(["Please submit Basic Info form first"]);
    }
  };

  // Renderer
  /* *************************************************************/

  return (
    <div className="contents">
      <h1>Content</h1>
      {errors.map((error, index) => (
        <p key={index}>{error}</p>
      ))}
      <h3>This is where you input the content you want to show</h3>
      <p>
        {content} {overlay} {story}
      </p>
      <form className="contents-form" onSubmit={handleSubmit}>
        <label>
          Content
          <input
            type="text"
            placeholder="image-url"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </label>
        <label>
          Overlay (optional)
          <input
            type="text"
            placeholder="image-url"
            value={overlay}
            onChange={(e) => setOverlay(e.target.value)}
          />
        </label>
        <label>
          Story
          <textarea
            type="text"
            value={story}
            onChange={(e) => setStory(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contents;

//Scrap
/* ****************************************************************/

// const [campaignId, setCampaignId] = useState("");
// const latestCampaign = campaigns[campaigns.length - 1];
// const { id } = latestCampaign;
// console.log(id);
// dispatch(getAllCampaigns());
// useEffect(() => {
//   (async () => {
//     const getCampaigns = await fetch("/api/campaigns");
//     const campaignData = await getCampaigns.json();
//     console.log(campaignData);
//   });
// });
/* <input type="hidden" value={campaignId}></input> */
// setCampaignId(id);
