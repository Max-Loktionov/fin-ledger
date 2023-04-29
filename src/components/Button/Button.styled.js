import styled from "styled-components";

export const ButtonStyled = styled.button`
  display: block;
  min-width: 155px;
  padding: 16px 32px;
  border: solid 1px;
  border-radius: 5px;
  background-color: transparent;
  color: var(--main);

  font-size: 18px;
  line-height: 1.4;
  cursor: pointer;
  border: var(--main) 1px solid;

  transition: background-color 0.3s ease-out, color 0.3s ease-out;
  &:hover {
    color: var(--brand-color);

    background-color: var(--main);
  }
`;
