import { SectionTitle } from "../About/About.styled";
import Button from "../Button/Button";
import { ContactImgWrapper } from "./Callback.styled";

export default function Callback() {
  return (
    <section>
      <ContactImgWrapper />
      <SectionTitle>Request Callback</SectionTitle>
      <Button>Send</Button>
    </section>
  );
}
