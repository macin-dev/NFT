import { Card } from "../../global/nftcard/Card";
import { Explore, Options, Tab } from "./";
import { images } from "./data";

export const NFT = () => {
  return (
    <section className="flex flex-col w-mobile p-4 gap-4">
      <Explore />
      <Tab />
      <Options />

      <div className="flex flex-col py-6 gap-3">
        <div className="flex flex-wrap gap-3">
          {images.map((image, i) => (
            <div
              key={i}
              className="flex-grow shrink-0 w-[10.3125rem] h-[15.625rem]"
            >
              <Card
                url={image.url}
                userName="Winter Madagascar"
                text="Clown Ape"
                price="0.002ETH"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
