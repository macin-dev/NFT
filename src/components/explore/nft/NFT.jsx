import { useState } from "react";
import { Card } from "../../global/nftcard/Card";
import { Filter } from "../filter";
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
      <div className="flex flex-col w-mobile p-4 gap-4 mx-auto">
        <Explore />
        <Tab />
        <Options onToggle={onToggle} />

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
