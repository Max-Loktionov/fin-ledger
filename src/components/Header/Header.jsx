import AppBar from "../AppBar";
import openBook from "../../assets/fa-solid_book-open.svg";
import { SiteHeader, Logo, LogoTitle, LogoWrapper, Text } from "./Header.styled";
export default function Header() {
  return (
    <SiteHeader>
      <LogoWrapper>
        <Logo src={openBook} alt="Finance Ledger" />
        <LogoTitle>
          Finance<Text>Ledger</Text>
        </LogoTitle>
      </LogoWrapper>
      <AppBar />
    </SiteHeader>
  );
}
