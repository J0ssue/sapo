import React, { useState } from "react";

import jumpSectionConfig from "../../configs/jumpSectionConfig.json";

import {
  JumpSectionComp,
  JumpForm,
  FormButton,
  JumpStatic,
  DashedContent,
  JumpContentContainer,
} from "./styled-components";

import TitleBrandComp from "../TitleBrandComp";

const JumpSection = () => {
  const [jumps, setJumps] = useState(0);
  const [count, setCount] = useState({
    x: 0,
    y: 0,
    d: 0,
  });

  const isValid = () => {
    const val1 = Math.floor(count.x);
    const val2 = Math.floor(count.y);
    const val3 = Math.floor(count.d);
    const vals = [val1, val2, val3];
    if (vals.every((val) => val === 0)) {
      alert("enter numbers");
      return false;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    isValid();

    let total = Math.floor(count.x) + Math.floor(count.d);
    const highest = Math.floor(count.y);
    if (total >= highest) {
      alert("no jumps needed");
      return;
    }
    while (total < highest) {
      setJumps((jump) => jump + 1);
      total = total + Math.floor(count.d);
    }
  };
  return (
    <JumpSectionComp>
      <TitleBrandComp
        className="jump-section-title"
        title={
          jumpSectionConfig.title[0] +
          ` ${jumps} ` +
          [jumpSectionConfig.title[1]]
        }
        brand={jumpSectionConfig.brand}
      />
      <JumpContentContainer>
        <JumpForm onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="x" className="x">
            <span>x</span>
            <input
              id="x"
              type="number"
              onChange={(e) =>
                setCount((prev) => ({ ...prev, x: e.target.value }))
              }
              value={count.x}
            />
          </label>

          <label htmlFor="y" className="y">
            <span>y</span>
            <input
              id="y"
              type="number"
              onChange={(e) =>
                setCount((prev) => ({ ...prev, y: e.target.value }))
              }
              value={count.y}
            />
          </label>

          <label htmlFor="d" className="d">
            <span>d</span>
            <input
              id="d"
              type="number"
              onChange={(e) =>
                setCount((prev) => ({ ...prev, d: e.target.value }))
              }
              value={count.d}
            />
          </label>
          <FormButton>Da o salto</FormButton>
        </JumpForm>
        <JumpStatic>
          <DashedContent>
            <div />
            <div />
            <div />
            <div />
          </DashedContent>
        </JumpStatic>
      </JumpContentContainer>
    </JumpSectionComp>
  );
};

export default JumpSection;
