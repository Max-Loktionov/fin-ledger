import styled from "styled-components";
import { ReactComponent as LogoIcon } from "../../assets/fa-solid_book-open.svg";

export const SiteHeader = styled("header")`
  position: fixed;
  left: 50%;
  top: 0px;
  z-index: 2;
  transform: translate(-50%, 0px);
  width: 100%;
  padding: 22px 0 16px;
  ${(props) => props?.scroll <= 120} {
    background-color: #333232cc;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${(props) => props?.scroll <= 70} {
      background-color: #333232cc;
    }
  }
  @media screen and (min-width: 1360px) {
    padding: 32px 0 16px;
  }
`;

export const HeaderWrapper = styled("div")`
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width: 1360px) {
    width: 1360px;
  }
`;

export const LogoWrapper = styled("div")`
  display: flex;
  margin-bottom: 16px;
  cursor: pointer;

  transition: scale 0.3s ease-out;
  :hover {
    scale: 1.05;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
    padding-bottom: 4px;
  }
`;
export const Logo = styled(LogoIcon)`
  margin-right: 8px;
`;
export const LogoTitle = styled("span")`
  font-size: 28px;
  line-height: 38px;
  color: var(--brand-color);
  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
`;
export const Text = styled("span")`
  margin-left: 8px;
  color: var(--main);
`;
