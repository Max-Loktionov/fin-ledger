import { SectionTitle } from "../About/About.styled";

import { ContactImgWrapper, CallbackButton, CallbackBox } from "./Callback.styled";

export default function Callback() {
  return (
    <section>
      <ContactImgWrapper />
      <CallbackBox>
        <SectionTitle>Request Callback</SectionTitle>
        <CallbackButton>Send</CallbackButton>
      </CallbackBox>
    </section>
  );
}
