import styled from "styled-components";

export const GallaryList = styled("ul")`
  display: grid;
  gap: 8px;
  padding: 10px;

  @media screen and (min-width: 768px) {
    grid-template-columns: auto auto auto;
    gap: 16px;
  }
`;

export const CardImg = styled.img`
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
    filter: brightness(1.1);
  }
  @media screen and (min-width: 768px) {
    width: 223px;
  }
  @media screen and (min-width: 1360px) {
    width: 420px;
  }
`;
