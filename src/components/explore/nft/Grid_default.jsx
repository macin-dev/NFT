import { Card } from "../../global/nftcard/Card";
import { images } from "./data";

export const Grid_default = () => {
  return (
    <div className="grid grid-cols-2 gap-3 tablet:flex-grow tablet:gap-x-3 tablet:gap-y-4 desktop:grid-cols-4">
      {images.map((image, i) => (
        <div
          key={i}
          className="w-[10.3125rem] h-[15.625rem] tablet:w-[16.875rem] tablet:h-[17.5rem] desktop:w-[14.3125rem] desktop:h-[20rem]"
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
  );
};
