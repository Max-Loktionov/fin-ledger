import styled from "styled-components";
import { Link } from "react-scroll";

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 16px;
`;

export const MenuList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const MenuItem = styled("li")`
  &:not(:last-child) {
    margin-right: 12px;
  }

  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin-right: 20px;
    }
  }

  @media screen and (min-width: 1360px) {
    &:not(:last-child) {
      margin-right: 40px;
    }
  }
`;
export const NAVLink = styled(Link)`
  position: relative;
  padding-bottom: 4px;
  text-decoration: none;
  font-weight: 400;
  cursor: pointer;

  :after {
    display: block;
    position: absolute;
    left: 0;
    width: 0;
    bottom: 4px;
    height: 2px;
    background-color: var(--brand-color);
    content: "";
    transition: width 0.3s ease-out;
  }
  :hover:after,
  :focus:after {
    width: 100%;
  }
`;
