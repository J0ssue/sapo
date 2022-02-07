import React from "react";

import { Title, UpperTitleContainer } from "./styled-components";

function TitleBrandComp(props) {
  return (
    <div className={props.className}>
      <UpperTitleContainer>
        <span>{props.brand}</span>
      </UpperTitleContainer>

      <Title>{props.title}</Title>
    </div>
  );
}

TitleBrandComp.defaultProps = {
  className: "",
};

export default TitleBrandComp;
