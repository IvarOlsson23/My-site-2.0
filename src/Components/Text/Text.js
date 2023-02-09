import React from "react";
import "./Text.scss";

const Text = (props) => {
  return <div className="text-wrapper">{props.text}</div>;
};

export default Text;
