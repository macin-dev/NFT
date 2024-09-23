export const Carousel = () => {
  return (
    <section className="w-mobile h-[12.5rem]">
      <div className="flex h-full gap-3 pr-12 overflow-x-scroll">
        <div className="w-[13.75rem] h-full flex shrink-0 items-center justify-center self-stretch">
          <img
            className="w-full h-full rounded-xl"
            src="./assets/cards/card1.jpeg"
            alt="Avtar card"
          />
        </div>
        <div className="w-[13.75rem] h-full flex shrink-0 items-center justify-center self-stretch">
          <img
            className="w-full h-full rounded-xl"
            src="./assets/cards/card6.jpeg"
            alt="Avtar card"
          />
        </div>
        <div className="w-[13.75rem] h-full flex shrink-0 items-center justify-center self-stretch">
          <img
            className="w-full h-full rounded-xl"
            src="./assets/cards/card3.jpeg"
            alt="Avtar card"
          />
        </div>
      </div>
    </section>
  );
};
