import styled from "styled-components";
import { Facebook, Twitter, Youtube, Linkedin } from "react-bootstrap-icons";

export const CasesBox = styled("div")`
  padding: 56px 20px 40px;
  color: #333333;
`;
export const SiteFooter = styled("footer")`
  padding: 20px;
  text-align: center;
  background-color: var(--dark);
`;
export const FooterList = styled("ul")`
  display: flex;
  justify-content: center;
  margin-top: 20px;
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
  background-color: var(--dark);
`;

export const FacebookIcon = styled(Facebook)`
  width: 35px;
  height: 35px;
  fill: var(--main);

  &:hover,
  &:focus {
    fill: var(--brand-color);
  }
`;
export const TwitterIcon = styled(Twitter)`
  width: 35px;
  height: 35px;
  fill: var(--main);

  &:hover,
  &:focus {
    fill: var(--brand-color);
  }
`;
export const YoutubeIcon = styled(Youtube)`
  width: 35px;
  height: 35px;
  fill: var(--main);

  &:hover,
  &:focus {
    fill: var(--brand-color);
  }
`;
export const LinkedinIcon = styled(Linkedin)`
  width: 35px;
  height: 35px;
  fill: var(--main);

  &:hover,
  &:focus {
    fill: var(--brand-color);
  }
`;
