import { css } from "@emotion/react";
import styled from "@emotion/styled";

const sharedStyles = css`
  width: 50px;
  height: 50px;
`;

export const SquaresComp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LeftSquare = styled.div`
  ${sharedStyles};
  background-color: #45b8ac;

  display: flex;
  justify-content: center;
  align-items: center;

  &.selected {
    width: 100px;
    height: 100px;
  }

  &.selected::before {
    content: "";
    display: block;
    width: 90px;
    height: 90px;
    border: 3px solid white;
    background-color: transparent;
  }
`;

export const RightSquare = styled.div`
  ${sharedStyles};
  background-color: #ff6f61;
  display: flex;
  justify-content: center;
  align-items: center;

  &.selected {
    width: 100px;
    height: 100px;
  }

  &.selected::before {
    content: "";
    display: block;
    width: 90px;
    height: 90px;
    border: 3px solid white;
    background-color: transparent;
  }
`;

export const CenterSquare = styled.div`
  ${sharedStyles};
  background-color: #6495ed;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;

  &.selected {
    width: 100px;
    height: 100px;
  }

  &.selected::before {
    content: "";
    display: block;
    width: 90px;
    height: 90px;
    border: 3px solid white;
    background-color: transparent;
  }
`;
