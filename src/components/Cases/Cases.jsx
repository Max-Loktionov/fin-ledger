import { CasesSection, CasesBox } from "./Cases.styled";
import { SectionTitle } from "../About/About.styled";

export default function Cases() {
  return (
    <>
      <CasesSection>
        <CasesBox>
          <p>This is what we do</p>
          <SectionTitle>Business Cases</SectionTitle>
          <article>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</article>
        </CasesBox>
      </CasesSection>
    </>
  );
}
