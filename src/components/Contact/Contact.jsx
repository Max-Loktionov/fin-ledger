import teamSrc from "./imageImportContact";
import { SectionTitle, SectionArticle } from "../About/About.styled";
import { FooterItem, FooterLink } from "../Footer/Footer.styled";
import {
  TeamBox,
  TeamList,
  TeamCardImg,
  TeamItem,
  CardTextWrapper,
  CardTitle,
  CardImageOverlay,
  CardImageWrapper,
  FacebookIcon1,
  TwitterIcon1,
  LinkedinIcon1,
  YoutubeIcon1,
  SocialList,
} from "./Contact.styled";

export default function Contact() {
  return (
    <section>
      <TeamBox id="contact">
        <p>Who we are</p>
        <SectionTitle>Our Professional Team</SectionTitle>
        <SectionArticle>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</SectionArticle>
        <TeamList>
          {teamSrc.map((card, idx) => {
            return (
              <TeamItem key={idx}>
                <CardImageWrapper>
                  <picture>
                    <source srcSet={`${card._1x_webp} 1x, ${card._2x_webp} 2x`} type="image/webp" loading="lazy" />
                    <source srcSet={`${card._1x} 1x, ${card._2x} 2x`} type="image/jpeg" loading="lazy" />
                    <TeamCardImg src={card._1x} alt={card.alt} loading="lazy" width="420" height="287" />
                  </picture>
                  <CardImageOverlay>
                    <SocialList>
                      <FooterItem>
                        <FooterLink>
                          <FacebookIcon1 />
                        </FooterLink>
                      </FooterItem>
                      <FooterItem>
                        <FooterLink>
                          <TwitterIcon1 />
                        </FooterLink>
                      </FooterItem>
                      <FooterItem>
                        <FooterLink>
                          <YoutubeIcon1 />
                        </FooterLink>
                      </FooterItem>
                      <FooterItem>
                        <FooterLink>
                          <LinkedinIcon1 />
                        </FooterLink>
                      </FooterItem>
                    </SocialList>
                  </CardImageOverlay>
                </CardImageWrapper>
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
