import React, { useState } from "react";
import classNames from "classnames";

import {
  SquaresComp,
  LeftSquare,
  RightSquare,
  CenterSquare,
} from "./styled-components";

const About = (props) => {
  const [selected, setSelected] = useState("center");

  return (
    <SquaresComp className="squares">
      <LeftSquare
        className={classNames({
          selected: selected === "left",
        })}
        onClick={() => {
          setSelected("left");
          props.onChange("#45b8ac");
        }}
      />
      <CenterSquare
        className={classNames({
          selected: selected === "center",
        })}
        onClick={() => {
          setSelected("center");
          props.onChange("#6495ED");
        }}
      />
      <RightSquare
        className={classNames({
          selected: selected === "right",
        })}
        onClick={() => {
          setSelected("right");
          props.onChange("#ff6f61");
        }}
      />
    </SquaresComp>
  );
};

export default About;
