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

  @media screen and (min-width: 768px) {
    height: 1024px;
    padding-top: 378px;
  }

  @media screen and (min-width: 1360px) {
    height: 768px;
    padding-top: 272px;
  }
`;

export const HeroTitle = styled("p")`
  margin: 0 20px 24px 20px;
  text-align: center;
  font-size: 26px;
  line-height: 32px;
`;

export const HeroText = styled("h1")`
  margin: 0 40px 16px 40px;
  font-weight: 600;
  font-size: 40px;
  line-height: 54px;
  text-align: center;
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
