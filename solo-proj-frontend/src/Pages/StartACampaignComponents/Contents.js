import { useState, useEffect } from "react";
import React from "react";
import "./Contents.css";
import { useDispatch, useSelector } from "react-redux";
import { addContent, addNewContent } from "../../store/content.js";
import { getAllCampaigns } from "../../store/campaign.js";

const Contents = () => {
  const dispatch = useDispatch();
  const [content, setContent] = useState("");
  const [overlay, setOverlay] = useState("");
  const [story, setStory] = useState("");
  const [errors, setErrors] = useState([]);
  // const [campaignId, setCampaignId] = useState("");
  const campaigns = useSelector((state) => state.campaign.campaigns);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const latestCampaign = campaigns[campaigns.length - 1];
    const { id } = latestCampaign;
    console.log(id);
    // setCampaignId(id);
    dispatch(addNewContent(content, id, overlay, story)).catch((res) => {
      if (res.data && res.data.errors) setErrors(res.data.errors);
    });
  };

  return (
    <div className="contents">
      <h1>Content</h1>
      {errors.map((error) => (
        <p>{error}</p>
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
        {/* <input type="hidden" value={campaignId}></input> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contents;
