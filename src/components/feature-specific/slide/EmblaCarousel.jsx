import useEmblaCarousel from "embla-carousel-react";
import ImageItem from "./ImageItem.jsx";

const images = [
  {
    id: 1,
    title: "Summer Grandma",
    url: "slide-1",
    text: "floor : 0.03 ETH",
  },
  {
    id: 2,
    title: "Pixelvibe",
    url: "slide-2",
    text: "floor : 0.03 ETH",
  },
  {
    id: 3,
    title: "Mother Miranda",
    url: "slide-3",
    text: "floor : 0.03 ETH",
  },
  {
    id: 4,
    title: "Liquidman",
    url: "slide-4",
    text: "floor : 0.03 ETH",
  },
];

const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <section className="embla tablet:px-20 desktop:max-w-[90rem] desktop:h-[20rem]">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {images.map((item) => (
            <div className="embla__slide" key={item.id}>
              <ImageItem url={item.url} title={item.title} text={item.text} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;