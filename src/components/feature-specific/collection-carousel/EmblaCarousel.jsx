import useEmblaCarousel from "embla-carousel-react";
import { Imagen } from "./Imagen.jsx";

const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ slidesToScroll: "auto" });
  return (
    <section className="embla-collection">
      <div className="embla__viewport-collection" ref={emblaRef}>
        <div className="embla__container-collection">
          {Array.from({ length: 7 }, (_, index) => (
            <div className="embla__slide-collection" key={index}>
              <Imagen url={`https://nft-items-vault.s3.us-east-1.amazonaws.com/Ultrarare+assets/cards/card${index + 1}.jpeg`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
