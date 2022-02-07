import styled from "@emotion/styled";

export const AboutSectionComp = styled.section`
  margin-top: -65px;
  padding-top: 100px;
  padding-bottom: 100px;
  padding-left: 20px;
  background-color: ${(props) => props.theme.genericGray};
  overflow-x: hidden;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 98%);

  @media (min-width: 1200px) {
    .squares {
      display: none !important;
    }
  }
`;

export const AboutText = styled.div`
  margin-bottom: 25px;
  background-color: ${(props) => props.hasWhiteBackground && "white"};
  padding: 10px;
  font-size: ${(props) => props.hasWhiteBackground && "25px"};
  position: relative;
  p {
    width: 200px;
    margin: 0;
  }
  mark {
    color: white;
    background-color: ${(props) => props.theme.primary};
  }

  @media (min-width: 1200px) {
    width: fit-content;
    margin: 0 auto;
  }

  &:nth-of-type(3) {
    display: none;

    mark {
      color: initial;
      background-color: transparent;
    }
  }
`;

export const DottedCircle = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 3px dashed ${(props) => props.theme.primary};
  top: -13px;
  right: -95px;
`;

export const ButtonsContainer = styled.div`
  @media (min-width: 1200px) {
    display: flex;
    justify-content: center;
  }
`;

export const ButtonManifest = styled.button`
  color: white;
  border: none;
  clip-path: polygon(0 0, 100% 0, 80% 100%, 0 98%);
  background-color: #228b22;
  margin-bottom: 10px;
  padding: 10px 30px 10px 10px;
  @media (min-width: 1200px) {
    margin-bottom: 0;
  }
`;

export const ButtonJump = styled.button`
  color: white;
  border: none;
  clip-path: polygon(0 0, 80% 0, 100% 100%, 0 98%);
  background-color: #00ff7f;
  padding: 10px 30px 10px 10px;

  @media (min-width: 1200px) {
    margin-bottom: 0;
    margin-right: 20px;
    clip-path: polygon(10% 0, 100% 0, 90% 100%, 0% 100%);
    padding-left: 40px;
    padding-right: 40px;
  }
`;
