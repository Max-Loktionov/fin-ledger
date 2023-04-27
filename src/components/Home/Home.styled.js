import styled from "styled-components";
import home from "../../assets/images/home/showcase.jpg";
import home2x from "../../assets/images/home/showcase@2x.jpg";
import homeWebp from "../../assets/images/home/showcase.webp";
import homeWebp2x from "../../assets/images/home/showcase@2x.webp";
import { ButtonStyled } from "../Button/Button.styled";

export const HomeWrapper = styled("div")`
  height: 533px;
  padding-top: 160px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${home});
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), image-set(url(${home}) 1x, url(${home2x}) 2x);
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), image-set(url(${homeWebp}) 1x, url(${homeWebp2x}) 2x);

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
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
