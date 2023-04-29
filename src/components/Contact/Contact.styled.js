import styled from "styled-components";

export const TeamBox = styled("div")`
  padding: 72px 20px 48px;
  color: var(--dark);
`;

export const TeamList = styled("ul")`
  display: grid;
  gap: 30px;

  @media screen and (min-width: 768px) {
    grid-template-columns: auto auto auto;
    gap: 16px;
  }
`;

export const TeamCardImg = styled("img")`
  width: 280px;
  display: block;
  margin-left: auto;
  margin-right: auto;

  object-fit: cover;
  object-position: center;
  transition-property: all;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.43, 0.21, 0, 1.03);
  &:hover {
  }
  @media screen and (min-width: 768px) {
    width: 223px;
  }
  @media screen and (min-width: 1360px) {
    width: 420px;
  }
`;

export const CardTextWrapper = styled("div")`
  text-align: center;
  padding-top: 16px;
`;
export const CardTitle = styled("h3")`
  margin-bottom: 8px;
`;
export const TeamItem = styled("li")``;
