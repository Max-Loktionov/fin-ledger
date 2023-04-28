import styled from "styled-components";
import { ReactComponent as LogoIcon } from "../../assets/fa-solid_book-open.svg";

export const SiteHeader = styled("header")`
  position: fixed;
  left: 50%;
  top: 0px;
  transform: translate(-50%, 0px);
  width: 100%;
  padding: 22px 0 0;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media screen and (min-width: 1360px) {
    padding: 32px 0 0;
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

  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
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
