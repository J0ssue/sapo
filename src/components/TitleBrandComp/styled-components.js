import styled from "@emotion/styled";

export const UpperTitleContainer = styled.p`
  color: gray;
  border-left: 5px solid gray;
  font-weight: bold;
  padding-left: 10px;
  height: 100px;
  display: flex;
  flex-direction: row;

  span {
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  @media (min-width: 1200px) {
    width: fit-content;
    margin: 0 auto;
  }
`;

export const Title = styled.h1`
  text-transform: uppercase;
  font-size: 28px;
  width: 200px;
  @media (min-width: 1200px) {
    width: fit-content;
    margin: 0 auto;
  }
`;
