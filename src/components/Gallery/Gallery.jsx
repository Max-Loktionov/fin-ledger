import { useState } from "react";
import { cardSrc } from "./imageImport";
import { slidesSet } from "./imageImport";
import { GallaryList, CardImg } from "./Gallery.styled";
import { ReactComponent as MyCloseIcon } from "../../assets/facebook.svg";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Gallery() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, .7)", padding: "32px" },
          icon: { color: "red", width: "40px", height: "40px" },
          button: { width: "100px", height: "100px" },
        }}
        slides={slidesSet}
      />
      <GallaryList>
        {cardSrc.slice(0, 6).map((card, idx) => {
          return (
            <picture key={idx} onClick={() => setOpen(true)}>
              <source srcSet={`${card._1x_webp} 1x, ${card._2x_webp} 2x`} type="image/webp" loading="lazy" />
              <source srcSet={`${card._1x} 1x, ${card._2x} 2x`} type="image/jpeg" loading="lazy" />
              <CardImg src={card._1x} alt={card.alt} />
            </picture>
          );
        })}
      </GallaryList>
    </>
  );
}
