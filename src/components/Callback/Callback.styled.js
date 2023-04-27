import styled from "styled-components";
import contact from "../../assets/images/home/contact.jpg";
import contact2x from "../../assets/images/home/contact@2x.jpg";
import contactWebp from "../../assets/images/home/contact.webp";
import contactWebp2x from "../../assets/images/home/contact@2x.webp";
import { ButtonStyled } from "../Button/Button.styled";

export const ContactImgWrapper = styled("div")`
  height: 220px;
  width: 100%;

  background-image: url(${contact});
  background-image: image-set(url(${contact}) 1x, url(${contact2x}) 2x);
  background-image: image-set(url(${contactWebp}) 1x, url(${contactWebp2x}) 2x);

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
export const CallbackBox = styled("div")`
  padding: 51px 20px 25px;
  color: var(--dark);
`;
export const CallbackButton = styled(ButtonStyled)`
  padding-left: 56px;
  padding-right: 56px;
  background-color: var(--brand-color);
`;
export const Form = styled.form`
  margin-top: 40px;
  margin-bottom: 40px;
`;
export const Input = styled.input`
  display: block;
  margin-left: auto;
  margin-right: auto;
  &:not(:last-of-type) {
    margin-bottom: 2px;
  }

  padding: 11px 14px 12px;

  width: 280px;
  height: 40px;

  /* background-color: 
  border: 
  border-color: 
  border-radius: 40px; */
`;
export const ErrorText = styled.div`
  margin-left: 16px;
  &:not(:last-of-type) {
    margin-bottom: 14px;
  }
  font-size: 10px;
  color: red;

  font-style: italic;
`;
