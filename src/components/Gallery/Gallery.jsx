import { useState, useRef } from "react";
import { cardSrc } from "./imageImport";
import { slidesSet } from "./imageImport";
import { GallaryList, CardImg } from "./Gallery.styled";
import MyPrevIcon from "../../assets/images/gallery/prev.png";
import MyNextIcon from "../../assets/images/gallery/next.png";
import MyCloseIcon from "../../assets/images/gallery/close.png";

import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(0);

  const handleOpenClick = (id) => {
    setCurrentItem(id);
    setOpen(true);
    console.log("current", id);
  };

  const ref = useRef(null);
  return (
    <>
      <Lightbox
        slides={slidesSet}
        index={currentItem}
        labels={{ Next: "Next slide" }}
        open={open}
        close={() => setOpen(false)}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, .7)", padding: "32px" },
          button: { width: "40%", height: "40%", opacity: "0.3" },
          icon: { width: "72px", height: "72px" },
        }}
        render={{
          // iconPrev: () => <img src={MyPrevIcon} />,
          // iconNext: () => <img src={MyNextIcon} />,
          // iconClose: () => <img src={MyCloseIcon} />,
          buttonPrev: currentItem === 0 ? () => null : undefined,
          buttonNext: currentItem === slidesSet.length - 1 ? () => null : undefined,
        }}
        controller={{ ref }}
        on={{ click: () => ref.previous.close() }}
        carousel={{ finite: true, closeOnBackdropClick: false, touchAction: "pan-y" }}
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
