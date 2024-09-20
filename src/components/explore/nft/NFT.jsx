import { useState } from "react";
import { Container, Filter } from "../filter";
import { Explore, Grid_default, HorizontalLayout, Options, Tab } from "./";

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
      <div className="flex flex-col w-mobile mx-auto tablet:w-tablet desktop:w-desktop self-stretch">
        <div className="flex flex-col items-start p-4 gap-4 tablet:py-6 tablet:px-10 desktop:py-10 desktop:px-20 self-stretch">
          <Explore />

          {window.innerWidth < 1440 ? (
            <>
              <Tab />
              <Options onToggle={onToggle} />
            </>
          ) : (
            <HorizontalLayout />
          )}
        </div>

        <div className="flex flex-col py-6 px-4 gap-3 tablet:flex-row tablet:items-start tablet:py-0 tablet:px-10 tablet:pb-10 tablet:gap-8 desktop:px-20 desktop:pb-20">
          <div className="hidden tablet:block">
            <Container dropdown={dropdown} onDropdown={onDropdown} />
          </div>

          <Grid_default />
        </div>
      </div>
      {toggle && (
        <Filter
          onToggle={onToggle}
          onDropdown={onDropdown}
          dropdown={dropdown}
        />
      )}
    </section>
  );
};
