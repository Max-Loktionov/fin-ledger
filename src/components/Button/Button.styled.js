import styled from "styled-components";

export const ButtonStyled = styled.button`
  padding: 16px 32px;
  border: solid 1px;
  border-radius: 4px;
  background-color: var(--color);
  color: var(--main);

  font-size: 18px;
  line-height: 1.4;
  cursor: pointer;
  /* box-shadow: var(--shadow-button); */

  &:hover {
    background-color: var(--accent-color);
  }
`;
