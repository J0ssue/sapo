import React from "react";
import {
  AboutSectionComp,
  AboutText,
  DottedCircle,
  ButtonsContainer,
  ButtonManifest,
  ButtonJump,
} from "./styled-components";

import Squares from "../Squares";
import TitleBrandComp from "../TitleBrandComp";

import aboutSectionConfig from "../../configs/aboutSectionConfig.json";

const About = (props) => {
  return (
    <AboutSectionComp>
      <Squares onChange={props.onChange} />
      <TitleBrandComp
        title={aboutSectionConfig.title}
        brand={aboutSectionConfig.brand}
      />

      {aboutSectionConfig.textContent.map((t, idx) => (
        <AboutText key={t.text} hasWhiteBackground={t.hasWhiteBackground}>
          <p>
            <span>{t.text}</span>{" "}
            {t.highlightedText && <mark>{t.highlightedText}</mark>}{" "}
            {t.continuingText && <span>{t.continuingText}</span>}
          </p>
          {idx === 1 && <DottedCircle />}
        </AboutText>
      ))}
      <ButtonsContainer>
        <ButtonManifest>Manifesto</ButtonManifest> <br />
        <ButtonJump>O SAPO deu o salto</ButtonJump>
      </ButtonsContainer>
    </AboutSectionComp>
  );
};

export default About;
