import { SectionTitle, SectionArticle } from "../About/About.styled";
import { TeamBox, TeamList } from "./Contact.styled";
export default function Contact() {
  return (
    <section>
      <TeamBox>
        <p>Who we are</p>
        <SectionTitle>Our Professional Team</SectionTitle>
        <SectionArticle>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</SectionArticle>
        <TeamList>
          <li>
            <img src="" alt="" />
          </li>
        </TeamList>
      </TeamBox>
    </section>
  );
}
