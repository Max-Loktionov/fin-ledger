import Button from "../Button";
import { AboutBox, AboutImgWrapper, Abouttitle, AboutSection } from "./About.styled";
import { SectionArticle, SubTitle } from "./About.styled";
export default function About() {
  return (
    <>
      <AboutSection>
        <AboutImgWrapper />
        <AboutBox>
          <SubTitle>What you are looking for</SubTitle>
          <Abouttitle>We provide bespoke solutions</Abouttitle>
          <SectionArticle>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid
            impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?
          </SectionArticle>
          <Button>Read More</Button>
        </AboutBox>
      </AboutSection>
    </>
  );
}
