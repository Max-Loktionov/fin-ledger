import { SiteFooter, FooterList, FooterItem, FooterLink } from "./Footer.styled";
import { FacebookIcon, TwitterIcon, LinkedinIcon, YoutubeIcon } from "./Footer.styled";

export default function SocialList() {
  return (
    <SiteFooter>
      <FooterList>
        <FooterItem>
          <FooterLink>
            <FacebookIcon />
          </FooterLink>
        </FooterItem>
        <FooterItem>
          <FooterLink>
            <TwitterIcon />
          </FooterLink>
        </FooterItem>
        <FooterItem>
          <FooterLink>
            <YoutubeIcon />
          </FooterLink>
        </FooterItem>
        <FooterItem>
          <FooterLink>
            <LinkedinIcon />
          </FooterLink>
        </FooterItem>
      </FooterList>

      <p>Copyright © 2021 - FinanceLedger</p>
    </SiteFooter>
  );
}
