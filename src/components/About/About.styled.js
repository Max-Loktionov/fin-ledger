import styled from "styled-components";
import people from "../../assets/images/home/people.jpg";
import people2x from "../../assets/images/home/people@2x.jpg";
import peopleWebp from "../../assets/images/home/people.webp";
import peopleWebp2x from "../../assets/images/home/people@2x.webp";

export const AboutImgWrapper = styled("div")`
  height: 220px;
  width: 100%;

  background-image: url(${people});
  background-image: image-set(url(${people}) 1x, url(${people2x}) 2x);
  background-image: image-set(url(${peopleWebp}) 1x, url(${peopleWebp2x}) 2x);

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
export const AboutBox = styled("div")`
  padding: 80px 20px;
  background-color: var(--brand-color);
`;
export const SectionTitle = styled("h2")`
  margin-top: 16px;
  margin-bottom: 24px;
  text-align: center;
  font-size: 32px;
  line-height: 44px;
`;
export const SectionArticle = styled("article")`
  margin-bottom: 24px;
`;
// const AboutImg = styled.img.attrs({
//   src: `${logo}`,
// })`
//   width: 50px;
//   height: 30px;
// `;
