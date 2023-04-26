import { NAVLink, MenuList } from "./AppBar.styled";

export default function AppBar() {
  return (
    <nav>
      <MenuList>
        <li>
          <NAVLink>Home</NAVLink>
        </li>
        <li>
          <NAVLink>About</NAVLink>
        </li>
        <li>
          <NAVLink>Cases</NAVLink>
        </li>
        <li>
          <NAVLink>Blog</NAVLink>
        </li>
        <li>
          <NAVLink>Contact</NAVLink>
        </li>
      </MenuList>
    </nav>
  );
}
