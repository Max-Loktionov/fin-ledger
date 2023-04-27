import styled from "styled-components";
import contact from "../../assets/images/home/contact.jpg";
import contact2x from "../../assets/images/home/contact@2x.jpg";
import contactWebp from "../../assets/images/home/contact.webp";
import contactWebp2x from "../../assets/images/home/contact@2x.webp";

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
