import Button from "../Button";
import { AboutBox, AboutImgWrapper, SectionTitle, SectionArticle } from "./About.styled";
export default function About() {
  return (
    <>
      <section>
        <AboutImgWrapper />
        <AboutBox>
          <p>What you are looking for</p>
          <SectionTitle>
            We provide <br /> bespoke solutions
          </SectionTitle>
          <SectionArticle>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid
            impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?
          </SectionArticle>
          <Button>Read More</Button>
        </AboutBox>
      </section>
    </>
  );
}
