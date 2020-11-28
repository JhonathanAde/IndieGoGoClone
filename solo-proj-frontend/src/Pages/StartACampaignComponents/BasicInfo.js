import { useState, useEffect } from "react";
import React from "react";
import "./BasicInfo.css";
import { useDispatch } from "react-redux";
import { addNewCampaign, postNewCampaign } from "../../store/campaign.js";

const BasicInfo = () => {
  const dispatch = useDispatch();
  const [campaignTitle, setCampaignTitle] = useState("");
  const [cardImage, setCardImage] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      postNewCampaign(campaignTitle, description, cardImage, duration)
    ).catch((res) => {
      if (res.data && res.data.errors) setErrors(res.data.errors);
    });
    console.log(campaignTitle);
    console.log(description);
  };

  return (
    <div className="campaign-details__basicinfo">
      <h1>Basics</h1>
      {errors.map((error) => (
        <p>{error}</p>
      ))}
      <p>Here is where you will make a good impression of your campaign</p>
      <form
        className="campaign-details__basicinfo__form"
        onSubmit={handleSubmit}
      >
        <label>
          Campaign Title
          <input
            type="text"
            value={campaignTitle}
            onChange={(e) => setCampaignTitle(e.target.value)}
          ></input>
        </label>
        <label>
          Description
          <textarea
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Card Image
          <input
            type="text"
            value={cardImage}
            onChange={(e) => setCardImage(e.target.value)}
          ></input>
        </label>
        <label>
          Campaign Duration
          <input
            type="number"
            min="0"
            max="60"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          ></input>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BasicInfo;
