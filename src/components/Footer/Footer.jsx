import { SiteFooter, FooterList, FooterIcon } from "./Footer.styled";
import fb from "../../assets/facebook.svg";

export default function Footer() {
  return (
    <SiteFooter>
      <FooterList>
        <FooterIcon src={fb} />
      </FooterList>
      <p>Copyright © 2021 - FinanceLedger</p>
    </SiteFooter>
  );
}
