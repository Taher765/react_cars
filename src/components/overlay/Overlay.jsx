import React from "react";
import "./style.css";
const Overlay = () => {
  return (
    <div className="overlay load hidden">
      <div
        className="spinner-grow"
        style={{ width: "15rem", height: "15rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Overlay;
