import { SectionTitle, SectionArticle } from "../About/About.styled";
import Button from "../Button/Button";
import { BlogBox, BlogImgWrapper } from "./Blog.styled";

export default function Blog() {
  return (
    <section>
      <BlogImgWrapper />
      <BlogBox>
        <p>April 16 2020</p>
        <SectionTitle>Blog Post One</SectionTitle>
        <SectionArticle>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid
          impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?
        </SectionArticle>
        <Button>Read Our Blog</Button>
      </BlogBox>
    </section>
  );
}
