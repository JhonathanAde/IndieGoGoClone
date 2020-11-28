import { useState, useEffect } from "react";
import React from "react";
import { useDispatch } from "react-redux";
import "./Perks.css";

const Perks = () => {
  const [showItemForm, setShowItemForm] = useState(false);

  return (
    <div className="perks-container">
      <h1>Perks</h1>
      <h3>Here is where you can add perks to your campaign</h3>
      <form className="perks-form">
        <label>
          visibility
          <button>Yes</button>
          <button>No</button>
        </label>
        <label>
          Title
          <input type="text" />
        </label>
        <label>
          Description
          <input type="text" />
        </label>
        <label>
          Perk Image
          <input type="text" />
        </label>
        <label>
          Add Items
          <button>Add</button>
        </label>
        <label>
          Price
          <input type="text" />
        </label>
        <label>
          Quantity
          <input type="text" />
        </label>
      </form>
    </div>
  );
};

export default Perks;
