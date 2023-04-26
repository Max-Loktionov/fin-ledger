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

export const NAVLink = styled.a`
  text-decoration: none;

  font-weight: 400;

  /* &:not(:last-child) {
    padding-right: 12px;
  } */
`;
