import { ButtonStyled } from "./Button.styled";

export default function Button(props) {
  return (
    <ButtonStyled type="button" onClick={props.onClick} check={props.checked}>
      {props.children}
    </ButtonStyled>
  );
}
