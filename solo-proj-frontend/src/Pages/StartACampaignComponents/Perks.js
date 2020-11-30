// Imports
/* ***********************************************************/

import { useState, useEffect } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Perks.css";
import { createNewPerk } from "../../store/perks.js";

const Perks = () => {
  const dispatch = useDispatch();

  // Hooks
  /* ********************************************************/

  // const [showItemForm, setShowItemForm] = useState(false);
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState([]);
  const [perkImage, setPerkImage] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [title, setTitle] = useState("");
  const [visible, setVisibility] = useState(false);

  // Selectors
  /* *******************************************************/

  const campaigns = useSelector((state) => state.campaign.campaigns);

  // Methods
  /* *******************************************************/

  const visibilityOn = () => {
    if (visible === true) {
      setVisibility(false);
    } else {
      return;
    }
    console.log(visible);
  };
  const visibilityOff = () => {
    if (visible === false) {
      setVisibility(true);
    } else {
      return;
    }
    console.log(visible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (campaigns.length) {
      const latestCampaign = campaigns[campaigns.length - 1];
      const { id } = latestCampaign;
      console.log(id);
      dispatch(
        createNewPerk(
          visible,
          title,
          description,
          perkImage,
          price,
          quantity,
          id
        )
      ).catch((res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      });
    } else {
      return setErrors(["Please submit Basic Info form first"]);
    }
  };

  // Renderer
  /* *************************************************************/

  return (
    <div className="perks-container">
      <h1>Perks</h1>
      {errors.map((error, index) => (
        <p key={index}>{error}</p>
      ))}
      <h3>Here is where you can add perks to your campaign</h3>
      <form className="perks-form" onSubmit={handleSubmit}>
        <label>
          visibility
          <button onClick={visibilityOn}>Yes</button>
          <button onClick={visibilityOff}>No</button>
        </label>
        <label>
          Title
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Description
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Perk Image
          <input
            type="text"
            value={perkImage}
            onChange={(e) => setPerkImage(e.target.value)}
          />
        </label>
        <label>
          Add Items
          <button>Add</button>
        </label>
        <label>
          Price
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <label>
          Quantity
          <input
            type="text"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Perks;
