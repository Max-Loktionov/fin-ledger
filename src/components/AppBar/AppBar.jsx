import { NAVLink, MenuList, MenuItem } from "./AppBar.styled";

export default function AppBar() {
  return (
    <nav>
      <MenuList>
        <MenuItem>
          <NAVLink to="home" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>
            Home
          </NAVLink>
        </MenuItem>
        <MenuItem>
          <NAVLink to="about" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>
            About
          </NAVLink>
        </MenuItem>
        <MenuItem>
          <NAVLink to="cases" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>
            Cases
          </NAVLink>
        </MenuItem>
        <MenuItem>
          <NAVLink to="blog" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>
            Blog
          </NAVLink>
        </MenuItem>
        <MenuItem>
          <NAVLink to="contact" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>
            Contact
          </NAVLink>
        </MenuItem>
      </MenuList>
    </nav>
  );
}
