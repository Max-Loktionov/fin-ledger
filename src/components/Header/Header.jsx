import AppBar from "../AppBar";
import openBook from "../../assets/fa-solid_book-open.svg";
import { SiteHeader, Logo, LogoTitle, LogoWrapper, Text, HeaderWrapper } from "./Header.styled";
export default function Header() {
  return (
    <SiteHeader>
      <HeaderWrapper>
        <LogoWrapper>
          <Logo />
          <LogoTitle>
            Finance<Text>Ledger</Text>
          </LogoTitle>
        </LogoWrapper>
        <AppBar />
      </HeaderWrapper>
    </SiteHeader>
  );
}
