import { SectionArticle, SubTitle } from "../About/About.styled";
import { BlogButton } from "./Blog.styled";
import { BlogSection, BlogBox, BlogImgWrapper, BlogTitle } from "./Blog.styled";

export default function Blog() {
  return (
    <BlogSection>
      <BlogImgWrapper />
      <BlogBox id="blog">
        <SubTitle>April 16 2020</SubTitle>
        <BlogTitle>Blog Post One</BlogTitle>
        <SectionArticle>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid
          impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?
        </SectionArticle>
        <BlogButton>Read Our Blog</BlogButton>
      </BlogBox>
    </BlogSection>
  );
}
