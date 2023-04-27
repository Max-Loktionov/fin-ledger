import { NAVLink, MenuList, MenuItem } from "./AppBar.styled";

export default function AppBar() {
  return (
    <nav>
      <MenuList>
        <MenuItem>
          <NAVLink>Home</NAVLink>
        </MenuItem>
        <MenuItem>
          <NAVLink>About</NAVLink>
        </MenuItem>
        <MenuItem>
          <NAVLink>Cases</NAVLink>
        </MenuItem>
        <MenuItem>
          <NAVLink>Blog</NAVLink>
        </MenuItem>
        <MenuItem>
          <NAVLink>Contact</NAVLink>
        </MenuItem>
      </MenuList>
    </nav>
  );
}
