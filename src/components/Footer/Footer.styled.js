import styled from "styled-components";
import { ReactComponent as Linkedin1 } from "../../assets/linkedin.svg";
import { ReactComponent as Youtube1 } from "../../assets/youtube.svg";
import { ReactComponent as Twitter1 } from "../../assets/twitter.svg";
import { ReactComponent as Facebook1 } from "../../assets/facebook.svg";

export const SiteFooter = styled("footer")`
  padding: 20px;
  text-align: center;
  background-color: var(--dark);
`;
export const FooterList = styled("ul")`
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
`;
export const FooterItem = styled("li")`
  width: 35px;
  height: 35px;
  &:not(:last-child) {
    margin-right: 25px;
  }
`;

export const FooterLink = styled("a")`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const FacebookIcon = styled(Facebook1)`
  width: 35px;
  height: 35px;
  fill: var(--main);

  transition: fill 0.3s ease-out;
  &:hover,
  &:focus {
    fill: var(--brand-color);
  }
`;
export const TwitterIcon = styled(Twitter1)`
  width: 35px;
  height: 35px;
  fill: var(--main);

  transition: fill 0.3s ease-out;
  &:hover,
  &:focus {
    fill: var(--brand-color);
  }
`;
export const YoutubeIcon = styled(Youtube1)`
  width: 35px;
  height: 35px;
  fill: var(--main);

  transition: fill 0.3s ease-out;
  &:hover,
  &:focus {
    fill: var(--brand-color);
  }
`;
export const LinkedinIcon = styled(Linkedin1)`
  width: 35px;
  height: 35px;
  fill: var(--main);

  transition: fill 0.3s ease-out;
  &:hover,
  &:focus {
    fill: var(--brand-color);
  }
`;
