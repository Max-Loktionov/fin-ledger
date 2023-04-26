import styled from "styled-components";

export const SiteHeader = styled("header")`
  position: fixed;
  left: 50%;
  top: 0px;
  transform: translate(-50%, 0px);

  /* display: flex;
  justify-content: space-between;
  align-items: center; */
  /* width: 1200px; */
  padding: 22px;
  /* margin-bottom: 16px; */

  background-color: transparent;
  /* box-shadow: rgb(6 24 44 / 40%) -1px 2px 0px -1px, rgb(6 24 44 / 65%) 0px 1px 2px -1px, rgb(255 255 255 / 8%) 0px 1px 0px inset; */
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
