import styled from "styled-components";
import home from "../../assets/images/home/showcase.jpg";
import home2x from "../../assets/images/home/showcase@2x.jpg";
import { ButtonStyled } from "../Button/Button.styled";

export const HomeWrapper = styled("div")`
  height: 533px;
  padding-top: 160px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${home});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${home2x});
  }
  /* background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(.jpg); */
`;

export const HeroText = styled("p")`
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 40px;
  line-height: 54px;
  text-align: center;
`;

export const HeroTitle = styled("h1")`
  margin-bottom: 24px;
  text-align: center;
  font-size: 26px;
  line-height: 32px;
`;
export const HeroButton = styled(ButtonStyled)`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  border-color: var(--brand-color);
  background-color: var(--brand-color);
`;
export const AngleRight = styled("img")`
  display: inline-block;
  padding-right: 8px;
`;