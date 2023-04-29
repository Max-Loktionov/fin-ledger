import { useState, useEffect } from "react";
import AppBar from "../AppBar";
import { SiteHeader, Logo, LogoTitle, LogoWrapper, Text, HeaderWrapper } from "./Header.styled";

export default function Header() {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <SiteHeader scroll={scroll}>
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
