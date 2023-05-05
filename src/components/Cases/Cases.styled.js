import styled from "styled-components";

export const CasesSection = styled("section")`
  max-width: 420px;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
  text-align: center;
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1360px) {
    margin-bottom: 80px;
    max-width: 1360px;
  }
`;

export const CasesBox = styled("div")`
  color: var(--dark);
`;
