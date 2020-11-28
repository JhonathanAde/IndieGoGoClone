import { useState, useEffect } from "react";
import React from "react";
import "./Contents.css";
import { useDispatch } from "react-redux";

const Contents = () => {
  return (
    <div className="contents">
      <h1>Content</h1>
      <h3>This is where you input the content you want to show</h3>
      <form className="contents-form">
        <label>
          Content
          <input type="text" placeholder="image-url"></input>
        </label>
        <label>
          Overlay (optional)
          <input type="text" placeholder="image-url"></input>
        </label>
        <label>
          Story
          <textarea type="text"></textarea>
        </label>
      </form>
    </div>
  );
};

export default Contents;
