import styled from "@emotion/styled";

export const HeaderComp = styled.header`
  background-color: ${(props) => props.theme.grayHeaderBackground};
  padding: 20px 20px 200px 20px;
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
`;

export const NavigationComp = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BrandContainer = styled.div`
  display: flex;
  align-items: baseline;
`;

export const BrandImage = styled.img`
  width: 48px;
  height: 28px;
  margin-right: 15px;
`;

export const BrandText = styled.p`
  text-transform: uppercase;
  line-height: 0px;
  padding: 0px;
  margin: 0px;
  color: white;
  font-size: 28px;
`;

export const BurgerMenu = styled.button`
  border: none;
  background-color: transparent;
  padding: 0px;

  &::before {
    background-color: black;
    content: "";
    display: block;
    width: 48px;
    height: 6px;
    margin-bottom: 6px;
  }
  &::after {
    background-color: black;
    content: "";
    display: block;
    width: 48px;
    height: 6px;
  }

  div {
    background-color: black;
    display: block;
    width: 48px;
    height: 6px;
    margin-bottom: 6px;
  }

  @media (min-width: 1200px) {
    display: none;
  }
`;

export const MenuDesktop = styled.div`
  display: none;

  a {
    color: white;
    padding: 5px;
    text-decoration: none;
  }

  a:not(:last-of-type) {
    margin-right: 20px;
  }

  a:target {
    background-color: black;
  }

  @media (min-width: 1200px) {
    display: block;
  }
`;

export const ShapesContainer = styled.div`
  margin: 0 auto;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    transform: rotate(50deg);
  }

  div:nth-of-type(1) {
    position: relative;
    margin-bottom: 20px;
  }

  div:nth-of-type(2) {
    margin-bottom: 30px;
    transform: rotate(80deg) translateY(47px);
  }

  div:nth-of-type(3) {
    margin-bottom: 30px;
  }

  div:nth-of-type(4) {
    transform: rotate(0deg) translateX(-73px);
  }

  div:nth-of-type(5) {
    transform: rotate(80deg) translateY(-43px);
  }

  @media (min-width: 1200px) {
    margin: 0;
    transform: rotate(90deg);
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  .squares {
    display: none;
  }

  @media (min-width: 1200px) {
    .squares {
      display: flex;
      margin-right: 200px;
    }
  }
`;
