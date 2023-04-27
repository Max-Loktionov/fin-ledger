import styled from "styled-components";

export const SiteHeader = styled("header")`
  position: fixed;
  left: 50%;
  top: 0px;
  transform: translate(-50%, 0px);
  padding: 22px 0 0;
  /* background-color: transparent; */
`;

export const LogoWrapper = styled("div")`
  display: flex;
  margin-bottom: 16px;
`;
export const Logo = styled("img")`
  margin-right: 8px;
`;
export const LogoTitle = styled("span")`
  font-size: 28px;
  line-height: 38px;
  color: var(--brand-color);
`;
export const Text = styled("span")`
  margin-left: 8px;
  color: var(--main);
`;
