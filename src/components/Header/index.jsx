import React from "react";
import {
  HeaderComp,
  BrandContainer,
  BrandImage,
  BrandText,
  BurgerMenu,
  NavigationComp,
  ShapesContainer,
  HeaderContainer,
  MenuDesktop,
} from "./styled-components";
import { Circle, Triangle, Rectangle } from "../../images";
import Squares from "../Squares";

const Header = (props) => {
  return (
    <HeaderComp>
      <NavigationComp>
        <BrandContainer>
          <BrandImage src="https://imgs.sapo.pt/marcasapo/imgs/sapo_symbol.png" />
          <BrandText>sapo</BrandText>
        </BrandContainer>
        <BurgerMenu onClick={props.onMenuClick}>
          <div></div>
        </BurgerMenu>
        <MenuDesktop>
          <a id="lorem" href="#lorem">
            lorem
          </a>
          <a id="ipsum" href="#ipsum">
            ipsum
          </a>
          <a id="dolore" href="#dolore">
            dolore
          </a>
        </MenuDesktop>
      </NavigationComp>

      <HeaderContainer>
        <Squares onChange={props.onChange} />
        <ShapesContainer>
          <Rectangle />
          <Triangle />
          <Rectangle />
          <Circle />
          <Triangle />
        </ShapesContainer>
      </HeaderContainer>
    </HeaderComp>
  );
};

export default Header;
