import styled from "@emotion/styled";

export const JumpSectionComp = styled.section`
  .jump-section-title {
    padding-left: 20px;
  }
`;

export const JumpForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.genericGray};
  padding: 50px 0;

  label {
    display: block;
    border-bottom: 3px solid black;
    width: fit-content;
    padding-bottom: 4px;
  }

  label input {
    border: none;
    background-color: transparent;
    outline: none;
  }

  label span {
    margin-right: 10px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 30px;
  }

  @media (min-width: 1200px) {
    width: fit-content;
    padding: 50px;
    margin-right: 200px;
  }
`;

export const FormButton = styled.button`
  color: white;
  border: none;
  clip-path: polygon(0 0, 100% 0, 80% 100%, 0 98%);
  background-color: ${(props) => props.theme.genericGreen};
  margin-bottom: 10px;
  padding: 10px 30px 10px 10px;
  align-self: flex-start;
  margin-top: 50px;
  margin-left: 50px;
  @media (min-width: 1200px) {
    margin: 0 auto;
    margin-top: 50px;
  }
`;

export const JumpStatic = styled.div`
  position: relative;
  overflow: hidden;
  height: 400px;
`;

export const DashedContent = styled.div`
  display: flex;
  height: fit-content;
  transform: rotate(45deg);
  position: relative;
  top: 25%;
  left: -25%;

  div {
    background-color: ${(props) => props.theme.primary};
    height: 20px;
    width: 58px;
  }

  div:not(:last-of-type) {
    margin-right: 20px;
  }

  @media (min-width: 1200px) {
    top: 46%;
    left: 10%;
  }
`;

export const JumpContentContainer = styled.div`
  @media (min-width: 1200px) {
    display: flex;
    justify-content: center;
    padding: 40px 0;
  }
`;
