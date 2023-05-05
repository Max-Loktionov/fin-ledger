import styled from "styled-components";
import blog from "../../assets/images/home/blog.jpg";
import blog2x from "../../assets/images/home/blog@2x.jpg";
import blogWebp from "../../assets/images/home/blog.webp";
import blogWebp2x from "../../assets/images/home/blog@2x.webp";
import { SectionTitle } from "../About/About.styled";
import { ButtonStyled } from "../Button/Button.styled";

export const BlogSection = styled("section")`
  margin-bottom: 72px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    margin-bottom: 50px;
  }
  @media screen and (min-width: 1360px) {
    margin-bottom: 80px;
  }
`;

export const BlogImgWrapper = styled("div")`
  height: 247px;
  width: 100%;

  background-image: url(${blog});
  background-image: image-set(url(${blog}) 1x, url(${blog2x}) 2x);
  background-image: image-set(url(${blogWebp}) 1x, url(${blogWebp2x}) 2x);

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    height: 493px;

    flex-basis: 100%;
  }
  @media screen and (min-width: 1360px) {
    height: 460px;
  }
`;

export const BlogBox = styled("div")`
  padding: 48px 20px 56px;
  background-color: var(--secondary-brand-color);

  @media screen and (min-width: 768px) {
    flex-basis: 100%;
    padding: 60px 32px;
  }
  @media screen and (min-width: 1360px) {
    padding: 80px 20px 80px 28px;
  }
`;
export const BlogTitle = styled(SectionTitle)`
  text-align: start;
`;
export const BlogButton = styled(ButtonStyled)`
  &:hover {
    color: #0284d0;
    border: 1px solid #0284d0;
  }
`;
