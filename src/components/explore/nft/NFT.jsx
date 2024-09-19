import { useState } from "react";
import { Card } from "../../global/nftcard/Card";
import { Container, Filter } from "../filter";
import { Explore, Options, Tab } from "./";
import { images } from "./data";

export const NFT = () => {
  const [toggle, setToggle] = useState(false);
  const [dropdown, setDropdown] = useState({
    blockchain: false,
    status: false,
    price: false,
    category: false,
    collections: false,
  });

  const onToggle = () => {
    setToggle(!toggle);
  };

  const onDropdown = (type) => {
    setDropdown({
      ...dropdown,
      [type]: !dropdown[type],
    });
  };

  return (
    <section className={`relative ${toggle ? "h-screen overflow-hidden" : ""}`}>
      <div className="flex flex-col w-mobile mx-auto tablet:w-tablet">
        <div className="flex flex-col items-start p-4 gap-4 tablet:py-6 tablet:px-10">
          <Explore />
          <Tab />
          <Options onToggle={onToggle} />
        </div>

        <div className="flex flex-col py-6 px-4 gap-3 tablet:flex-row tablet:items-start tablet:py-0 tablet:px-10 tablet:pb-10 tablet:gap-8">
          <div className="hidden tablet:block">
            <Container dropdown={dropdown} onDropdown={onDropdown} />
          </div>

          <div className="grid grid-cols-2 gap-3 tablet:flex-grow tablet:gap-x-3 tablet:gap-y-4">
            {images.map((image, i) => (
              <div
                key={i}
                className="w-[10.3125rem] h-[15.625rem] tablet:w-[16.875rem] tablet:h-[17.5rem]"
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

        {toggle && (
          <Filter
            onToggle={onToggle}
            onDropdown={onDropdown}
            dropdown={dropdown}
          />
        )}
      </div>
    </section>
  );
};
