import styled from "styled-components";
import { FooterList, FacebookIcon, TwitterIcon, LinkedinIcon, YoutubeIcon } from "../Footer/Footer.styled";

export const TeamBox = styled("div")`
  padding: 0 20px 48px;
  text-align: center;
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
export const TeamItem = styled("li")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 280px;

  @media screen and (min-width: 768px) {
    width: 223px;
  }
  @media screen and (min-width: 1360px) {
    width: 420px;
  }
`;
export const TeamCardImg = styled("img")`
  width: 280px;
  display: block;
  scale: 1;
  object-fit: cover;
  object-position: center;
  overflow: hidden;
  transition: scale 0.3s ease-out;

  @media screen and (min-width: 768px) {
    width: 223px;
  }
  @media screen and (min-width: 1360px) {
    width: 420px;
  }
`;

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
  justify-content: center;
  overflow: hidden;

  opacity: 0;
  z-index: 1;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
  transition-property: opacity, scale;
  transition-duration: 300ms;
  transition-timing-function: ease-out;

  @media screen and (min-width: 768px) {
    width: 223px;
    height: 148px;
  }
  @media screen and (min-width: 1360px) {
    width: 420px;
    height: 287px;
  }
`;
export const CardImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  object-fit: contain;

  transition: scale 0.3s ease-out, opacity 0.3s ease-out;

  &:hover {
    ${TeamCardImg} {
      scale: 1.05;
      box-shadow: (0px 4px 10px rgba(0, 0, 0, 0.25));
    }
    ${CardImageOverlay} {
      opacity: 1;
      scale: 1.05;
    }
  }

  @media screen and (min-width: 768px) {
    width: 223px;
    height: 148px;
  }
  @media screen and (min-width: 1360px) {
    width: 420px;
    height: 287px;
  }
`;
export const CardTextWrapper = styled("div")`
  text-align: center;
  padding-top: 16px;
`;
export const CardTitle = styled("h3")`
  margin-bottom: 8px;
`;

export const SocialList = styled(FooterList)`
  display: flex;
`;

export const FacebookIcon1 = styled(FacebookIcon)`
  opacity: 1;
  &:hover {
    opacity: 0.8;
    fill: #ffffffcc;
  }
`;
export const YoutubeIcon1 = styled(YoutubeIcon)`
  opacity: 1;
  &:hover {
    fill: #ffffffcc;
    opacity: 0.8;
  }
`;
export const TwitterIcon1 = styled(TwitterIcon)`
  opacity: 1;
  &:hover {
    fill: #ffffffcc;
    opacity: 0.8;
  }
`;

export const LinkedinIcon1 = styled(LinkedinIcon)`
  opacity: 1;
  &:hover {
    fill: #ffffffcc;
    opacity: 0.8;
  }
`;
