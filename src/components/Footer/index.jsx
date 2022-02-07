import React from "react";

import { FooterComp, IconsContainer } from "./styled-components";

import { Youtube, Twitter, Facebook } from "../../images";

const Footer = () => {
  return (
    <FooterComp>
      <IconsContainer>
        <a href="https://www.youtube.com" target="_blank">
          <Youtube />
        </a>
        <a href="https://www.twitter.com" target="_blank">
          <Twitter />
        </a>
        <a href="https://www.facebook.com" target="_blank">
          <Facebook />
        </a>
      </IconsContainer>
    </FooterComp>
  );
};

export default Footer;
