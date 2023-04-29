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
  const ref = useRef(null);
  return (
    <>
      <Lightbox
        slides={slidesSet}
        open={open}
        close={() => setOpen(false)}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, .7)", padding: "32px" },
          // icon: { color: "red", width: "40px", height: "40px" },
          button: { color: "red", width: "100px", height: "100px", position: "absolute", bottom: "-4500%" },
        }}
        render={{
          iconPrev: () => <img src={MyPrevIcon} />,
          iconNext: () => <img src={MyNextIcon} />,
          iconClose: () => <img src={MyCloseIcon} />,
          buttonPrev: slidesSet.length <= 1 ? () => null : undefined,
          buttonNext: slidesSet.length <= 1 ? () => null : undefined,
        }}
        controller={{ ref }}
        on={{ click: () => ref.current?.close() }}
        carousel={{ finite: true }}
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
