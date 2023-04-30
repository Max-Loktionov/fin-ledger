import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { cardSrc } from "./imageImport";
import { slidesSet } from "./imageImport";
import { GallaryList, CardImg } from "./Gallery.styled";

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(0);

  const handleOpenClick = (id) => {
    setCurrentItem(id);
    setOpen(true);
  };

  return (
    <>
      <Lightbox
        slides={slidesSet}
        index={currentItem}
        open={open}
        close={() => setOpen(false)}
        carousel={{ finite: true, closeOnBackdropClick: true, touchAction: "pan-y" }}
      />
      <GallaryList>
        {cardSrc.slice(0, 6).map((card, idx) => {
          return (
            <picture key={idx}>
              <source srcSet={`${card._1x_webp} 1x, ${card._2x_webp} 2x`} type="image/webp" loading="lazy" />
              <source srcSet={`${card._1x} 1x, ${card._2x} 2x`} type="image/jpeg" loading="lazy" />
              <CardImg src={card._1x} alt={card.alt} onClick={() => handleOpenClick(idx)} />
            </picture>
          );
        })}
      </GallaryList>
    </>
  );
}
