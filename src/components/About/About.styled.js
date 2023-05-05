import styled from "styled-components";
import people from "../../assets/images/home/people.jpg";
import people2x from "../../assets/images/home/people@2x.jpg";
import peopleWebp from "../../assets/images/home/people.webp";
import peopleWebp2x from "../../assets/images/home/people@2x.webp";

export const SectionTitle = styled("h2")`
  margin-bottom: 24px;
  text-align: center;
  font-size: 32px;
  line-height: 44px;
  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`;
export const SubTitle = styled("p")`
  margin-bottom: 16px;
`;
export const SectionArticle = styled("article")`
  margin-bottom: 24px;
`;

export const AboutSection = styled("section")`
  margin-bottom: 56px;
  margin-left: auto;
  margin-right: auto;
  max-width: 420px;
  @media screen and (min-width: 768px) {
    display: flex;
    margin-bottom: 48px;
    max-width: 768px;
  }
  @media screen and (min-width: 1360px) {
    margin-bottom: 80px;
    max-width: 1360px;
  }
`;

export const AboutImgWrapper = styled("div")`
  height: 220px;
  width: 100%;

  background-image: url(${people});
  background-image: image-set(url(${people}) 1x, url(${people2x}) 2x);
  background-image: image-set(url(${peopleWebp}) 1x, url(${peopleWebp2x}) 2x);

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    height: 589px;
    max-width: 48%;
    flex-basis: 100%;
  }
  @media screen and (min-width: 1360px) {
    height: 454px;
  }
`;
export const AboutBox = styled("div")`
  padding: 80px 20px;
  background-color: var(--brand-color);

  @media screen and (min-width: 768px) {
    flex-basis: 100%;
    padding: 62px 32px;
  }

  @media screen and (min-width: 1360px) {
    padding: 80px 28px 80px 20px;
  }
`;

export const Abouttitle = styled(SectionTitle)`
  text-align: start;
`;
