import teamSrc from "./imageImportContact";
import { SectionTitle, SectionArticle } from "../About/About.styled";
import { TeamBox, TeamList, TeamCardImg, TeamItem, CardTextWrapper, CardTitle } from "./Contact.styled";
export default function Contact() {
  return (
    <section>
      <TeamBox>
        <p>Who we are</p>
        <SectionTitle>Our Professional Team</SectionTitle>
        <SectionArticle>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</SectionArticle>
        <TeamList>
          {teamSrc.map((card, idx) => {
            return (
              <TeamItem key={idx}>
                <picture>
                  <source srcSet={`${card._1x_webp} 1x, ${card._2x_webp} 2x`} type="image/webp" loading="lazy" />
                  <source srcSet={`${card._1x} 1x, ${card._2x} 2x`} type="image/jpeg" loading="lazy" />
                  <TeamCardImg src={card._1x} alt={card.alt} />
                </picture>
                <CardTextWrapper>
                  <CardTitle>{card.name}</CardTitle>
                  <p>{card.position}</p>
                </CardTextWrapper>
              </TeamItem>
            );
          })}
        </TeamList>
      </TeamBox>
    </section>
  );
}
