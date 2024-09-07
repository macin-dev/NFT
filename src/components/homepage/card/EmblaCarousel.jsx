import useEmblaCarousel from "embla-carousel-react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselButtons";
import { NFTCard } from "./";

const cards = [
  {
    id: 1,
    profile: "Winter Madagascar",
    url: "./assets/cards/card1.jpeg",
    bodyText: {
      one: "Clown Ape",
      two: "0.002 ETH",
    },
  },
  {
    id: 2,
    profile: "Winter Madagascar",
    url: "./assets/cards/card2.jpeg",
    bodyText: {
      one: "Clown Ape",
      two: "0.002 ETH",
    },
  },
  {
    id: 3,
    profile: "Winter Madagascar",
    url: "./assets/cards/card3.jpeg",
    bodyText: {
      one: "Clown Ape",
      two: "0.002 ETH",
    },
  },
  {
    id: 4,
    profile: "Winter Madagascar",
    url: "./assets/cards/card2.jpeg",
    bodyText: {
      one: "Clown Ape",
      two: "0.002 ETH",
    },
  },
];

const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla__card max-w-[23.438rem] m-auto tablet:max-w-[33.813rem] tablet:m-0 tablet:flex-grow tablet:h-[25.125rem] tablet:shrink-0 desktop:max-w-[57.313rem]">
      <div className="embla__viewport-card" ref={emblaRef}>
        <div className="embla__container-card">
          {cards.map((card) => (
            <div className="embla__slide-card" key={card.id}>
              <NFTCard
                profile={card.profile}
                title={card.bodyText.one}
                price={card.bodyText.two}
                url={card.url}
              />
            </div>
          ))}
        </div>
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </section>
  );
};

export default EmblaCarousel;
