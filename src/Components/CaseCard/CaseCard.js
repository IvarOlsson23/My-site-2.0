import React from "react";
import "./CaseCard.scss";
import Heading1 from "../Headings/Heading1";
import Heading3 from "../Headings/Heading3";

const CaseCard = (props) => {
  return (
    <div className="casecard-wrapper">
      <div className="casecard-images">
        <img id="casecard-image-left" src={props.imageSource1} alt=""></img>
        <img id="casecard-image-right" src={props.imageSource2} alt=""></img>
      </div>
      <div className="casecard-content">
        <Heading1
          className="casecard-heading"
          HeadingText={props.HeadingText}
        />
        <p>{props.text}</p>
        <a className="github-link" href={props.repo}>
          {props.repoText}
        </a>
      </div>
    </div>
  );
};

export default CaseCard;
