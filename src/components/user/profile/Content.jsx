import { useState } from "react";
import { Container } from "../../explore/filter";
import Card from "./Card";
import { images } from "./data";
import { Tab } from "./Tab";

export const Content = () => {
  const [dropdown, setDropdown] = useState({
    blockchain: false,
    status: false,
    price: false,
    category: false,
    collections: false,
  });

  const onDropdown = (type) => {
    setDropdown({
      ...dropdown,
      [type]: !dropdown[type],
    });
  };

  return (
    <section className="flex flex-col w-mobile tablet:w-tablet desktop:w-desktop">
      <Tab />
      <div className="p-0 tablet:flex tablet:items-start tablet:gap-8 tablet:px-10 tablet:pb-10 desktop:px-20 desktop:pb-20">
        <div className="hidden tablet:block">
          <Container dropdown={dropdown} onDropdown={onDropdown} />
        </div>
        <div className="grid grid-cols-2 gap-3 px-4 pb-10 tablet:p-0 tablet:gap-y-4 desktop:grid-cols-4">
          {images.map((image, i) => (
            <div
              key={i}
              className="w-[10.3125rem] h-[16.25rem] tablet:w-[16.875rem] tablet:h-[17.5rem] desktop:w-[14.3125rem] desktop:h-[20rem]"
            >
              <Card
                url={image.url}
                title="Space Explorer"
                name="King989"
                price="0.0002 ETH"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
