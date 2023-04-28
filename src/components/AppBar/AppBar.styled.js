import styled from "styled-components";

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
export const NAVLink = styled.a`
  text-decoration: none;

  font-weight: 400;
`;
