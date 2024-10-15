import { useState } from "react";
import { Filter } from "../filter";
import { Explore, HorizontalLayout, NFTSection, Options, Tab } from "./";
import { Container } from "../../collections";
import { UserSection } from "../../user";
import { usePreventScrolling } from "../../../helper/usePreventScrolling";

export const NFT = () => {
  const [toggle, setToggle] = useState(false);
  const [tabs, setTabs] = useState({
    tab1: true,
    tab2: false,
    tab3: false,
  });
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

  const handleTabs = (tab) => {
    setTabs({
      tab1: false,
      tab2: false,
      tab3: false,
      [tab]: true,
    });
  };

  usePreventScrolling(toggle);

  return (
    <>
      <section className="flex flex-col w-mobile mx-auto tablet:w-tablet desktop:w-desktop self-stretch">
        <div className="flex flex-col items-start p-4 gap-4 tablet:py-6 tablet:px-10 desktop:py-10 desktop:px-20 self-stretch">
          <Explore />

          {window.innerWidth < 1440 ? (
            <>
              <Tab tabs={tabs} onTabs={handleTabs} />
              <Options onToggle={onToggle} />
            </>
          ) : (
            <HorizontalLayout tabs={tabs} onTabs={handleTabs} />
          )}
        </div>

        {tabs.tab1 && (
          <NFTSection dropdown={dropdown} onDropdown={onDropdown} />
        )}

        {tabs.tab2 && <Container />}

        {tabs.tab3 && <UserSection />}
      </section>
      {toggle && (
        <Filter
          onToggle={onToggle}
          onDropdown={onDropdown}
          dropdown={dropdown}
        />
      )}
    </>
  );
};
