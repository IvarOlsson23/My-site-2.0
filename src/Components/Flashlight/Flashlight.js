import React from "react";
import "./Flashlight.scss";
const Flashlight = (props) => {
  return (
    <div className="flashlight" style={props.style}>
      <div className="flashlight__beam"></div>
    </div>
  );
};

export default Flashlight;
