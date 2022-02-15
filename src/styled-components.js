import styled from "@emotion/styled";

export const Container = styled.main``;

export const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;

  .modal-left {
    padding: 50px;
  }
  .modal-left button {
    font-size: 48px;
    background: transparent;
    border: none;
  }

  .modal-right {
    background: black;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: end;
    padding: 50px;
  }

  .modal-right a {
    color: white;
    text-decoration: none;
    margin-bottom: 50px;
  }

  @media (min-width: 1200px) {
    display: none;
  }
`;
