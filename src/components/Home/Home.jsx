import { HomeWrapper, HeroText, HeroTitle, HeroButton, AngleRight } from "./Home.styled";
import angleRight from "../../assets/fa-solid_angle-right.svg";

export default function Home() {
  return (
    <section>
      <HomeWrapper id="home">
        <HeroText>The Sky Is The Limit</HeroText>
        <HeroTitle>We provide world class financial assistance</HeroTitle>
        <HeroButton>
          <AngleRight src={angleRight} /> Read More
        </HeroButton>
      </HomeWrapper>
    </section>
  );
}
