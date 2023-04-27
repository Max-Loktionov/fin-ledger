import styled from "styled-components";
import blog from "../../assets/images/home/blog.jpg";
import blog2x from "../../assets/images/home/blog@2x.jpg";
import blogWebp from "../../assets/images/home/blog.webp";
import blogWebp2x from "../../assets/images/home/blog@2x.webp";

export const BlogImgWrapper = styled("div")`
  height: 247px;
  width: 100%;

  background-image: url(${blog});
  background-image: image-set(url(${blog}) 1x, url(${blog2x}) 2x);
  background-image: image-set(url(${blogWebp}) 1x, url(${blogWebp2x}) 2x);

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const BlogBox = styled("div")`
  padding: 48px 20px 56px;
  background-color: var(--secondary-brand-color);
`;
