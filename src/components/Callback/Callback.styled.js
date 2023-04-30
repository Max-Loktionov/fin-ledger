import styled from "styled-components";
import contact from "../../assets/images/home/contact.jpg";
import contact2x from "../../assets/images/home/contact@2x.jpg";
import contactWebp from "../../assets/images/home/contact.webp";
import contactWebp2x from "../../assets/images/home/contact@2x.webp";
import { ButtonStyled } from "../Button/Button.styled";

export const CallbackSection = styled("section")`
  background-color: #f4f4f4;
  @media screen and (min-width: 768px) {
    display: flex;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1360px) {
    margin-bottom: 0px;
  }
`;

export const CallbackImgWrapper = styled("div")`
  height: 220px;
  width: 100%;

  background-image: url(${contact});
  background-image: image-set(url(${contact}) 1x, url(${contact2x}) 2x);
  background-image: image-set(url(${contactWebp}) 1x, url(${contactWebp2x}) 2x);

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    height: 354px;
    max-width: 48%;
    flex-basis: 100%;
  }
  @media screen and (min-width: 1360px) {
    height: 454px;
  }
`;
export const CallbackBox = styled("div")`
  padding: 51px 20px 25px;
  color: var(--dark);
  @media screen and (min-width: 768px) {
    flex-basis: 100%;
    padding: 32px;
  }
  @media screen and (min-width: 1360px) {
    padding: 56px 28px 76px 20px;
  }
`;

export const FormWrapper = styled.div`
  
  @media screen and (min-width: 1360px) {
    
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
 

  @media screen and (min-width: 768px) {
  }
 
`;
export const Label = styled.label`
  position: relative;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
 
`;
export const Placeholder = styled.span`
  position: absolute;
  top: 16px;
  left: 8px;
  color: #808080;
  transition: 0.2s ease all;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1360px) {
  }
`;
export const Input = styled.input`
  width: 100%;
  height: 56px;
  background: #ffffff;
  border: 1px solid #f5f5f5;
  border-radius: 5px;
  outline: none;
  padding: 16px 8px;
  ::placeholder {
    opacity: 0;
  }
  :focus-within ~ ${Placeholder}, :not(:placeholder-shown) ~ ${Placeholder} {
    top: -20px;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1360px) {
  }
`;

export const ErrorText = styled.div`
  display: flex;
  align-items: center;
  margin-left: 16px;
  &:not(:last-of-type) {
    margin-bottom: 14px;
  }
  font-size: 10px;
  color: red;

  font-style: italic;
`;
export const CallbackButton = styled(ButtonStyled)`
  padding-left: 56px;
  padding-right: 56px;
  width: 155px;
  background-color: var(--brand-color);

  &:hover,
  &:focus {
    background-color: #2ebf4f;
    color: var(--main);
  }
`;
