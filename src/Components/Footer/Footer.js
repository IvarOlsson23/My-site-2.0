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
      <a
        href="mailto: ivar.olsson2323@gmail.com"
        className="sm-icons"
        aria-label="Mail"
      >
        <RxEnvelopeClosed />
      </a>
      <a
        href="https://www.linkedin.com/in/ivar-olsson-620694154/"
        className="sm-icons"
        aria-label="linkedin"
      >
        <RxLinkedinLogo className="sm-symbols-inside" />
      </a>
      <a
        href="https://github.com/IvarOlsson23/"
        className="sm-icons"
        aria-label="GitHub"
      >
        <RxGithubLogo />
      </a>
      <a
        href="https://www.instagram.com/ivarolssonwl/"
        className="sm-icons"
        aria-label="instagram"
      >
        <RxInstagramLogo />
      </a>
    </div>
  );
};

export default Footer;
