import styled from "styled-components";
import { FooterList, FacebookIcon, TwitterIcon, LinkedinIcon, YoutubeIcon } from "../Footer/Footer.styled";

export const TeamBox = styled("div")`
  padding: 0 20px 48px;
  color: var(--dark);
`;

export const TeamList = styled("ul")`
  display: grid;
  gap: 30px;

  @media screen and (min-width: 768px) {
    grid-template-columns: auto auto auto;
    gap: 16px;
  }
`;

export const TeamCardImg = styled("img")`
  width: 280px;
  display: block;

  object-fit: cover;
  object-position: center;
  transition-property: all;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.43, 0.21, 0, 1.03);
  &:hover {
    scale: 1.1;
  }
  @media screen and (min-width: 768px) {
    width: 223px;
  }
  @media screen and (min-width: 1360px) {
    width: 420px;
  }
`;
export const CardImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;

  ${TeamCardImg} {
    &:hover {
      scale: 1.1;
    }
  }
`;
export const CardTextWrapper = styled("div")`
  text-align: center;
  padding-top: 16px;
`;
export const CardTitle = styled("h3")`
  margin-bottom: 8px;
`;
export const TeamItem = styled("li")``;

export const CardImageOverlay = styled("div")`
  position: absolute;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  width: 280px;
  height: 186px;
  display: flex;
  align-items: center;
  opacity: 0;
  z-index: 1;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
  transition-property: opacity;
  transition-duration: 960ms;
  transition-timing-function: cubic-bezier(0.43, 0.21, 0, 1.03);

  :hover {
    opacity: 1;

    ${TeamCardImg} {
      scale: 1.1;
    }
    box-shadow: (0px 4px 10px rgba(0, 0, 0, 0.25));
  }
  /* :hover ~ ${TeamCardImg} {
    scale: 1.1;
  } */
  /* &:hover {
    object-fit: cover;
    visibility: visible;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  } */

  /* &:hover > div {
    opacity: 1;
    visibility: visible;
  } */
  @media screen and (min-width: 768px) {
    width: 223px;
    height: 148px;
  }
  @media screen and (min-width: 1360px) {
    width: 420px;
    height: 287px;
  }
`;
export const SocialList = styled(FooterList)`
  display: flex;
`;

export const FacebookIcon1 = styled(FacebookIcon)`
  &:hover {
    fill: #ffffffcc;
  }
`;
export const TwitterIcon1 = styled(TwitterIcon)`
  &:hover {
    fill: #ffffffcc;
  }
`;
export const YoutubeIcon1 = styled(YoutubeIcon)`
  width: 35px;
  height: 35px;
  fill: var(--main);

  &:hover {
    fill: #ffffffcc;
  }
`;
export const LinkedinIcon1 = styled(LinkedinIcon)`
  width: 35px;
  height: 35px;
  fill: var(--main);

  &:hover {
    fill: #ffffffcc;
  }
`;
