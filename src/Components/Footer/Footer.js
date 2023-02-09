import React from "react";
import "./Footer.scss";
import {
  RxLinkedinLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxEnvelopeClosed,
} from "react-icons/rx";
const Footer = () => {
  return (
    <div className="footer-wrapper">
      <a href="mailto: ivar.olsson2323@gmail.com" className="sm-icons">
        <RxEnvelopeClosed />
      </a>
      <a
        href="https://www.linkedin.com/in/ivar-olsson-620694154/"
        className="sm-icons"
      >
        <RxLinkedinLogo className="sm-symbols-inside" />
      </a>
      <a href="https://github.com/IvarOlsson23/" className="sm-icons">
        <RxGithubLogo />
      </a>
      <a href="https://www.instagram.com/ivarolssonwl/" className="sm-icons">
        <RxInstagramLogo />
      </a>
    </div>
  );
};

export default Footer;
