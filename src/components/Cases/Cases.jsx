import Gallery from "../Gallery";
import { CasesSection, CasesBox } from "./Cases.styled";
import { SectionTitle } from "../About/About.styled";

export default function Cases() {
  return (
    <>
      <CasesSection>
        <CasesBox id="cases">
          <p>This is what we do</p>
          <SectionTitle>Business Cases</SectionTitle>
          <article>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</article>
        </CasesBox>
        <Gallery />
      </CasesSection>
    </>
  );
}
