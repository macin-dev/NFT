import { useState } from "react";
import { Explore, HorizontalLayout, NFTSection, Options, Tab } from "./";
import { Container } from "../../collections";
import { UserSection } from "../../user";

export const NFT = () => {
  const [tabs, setTabs] = useState({
    tab1: true,
    tab2: false,
    tab3: false,
  });

  const handleTabs = (tab) => {
    setTabs({
      tab1: false,
      tab2: false,
      tab3: false,
      [tab]: true,
    });
  };

  return (
    <>
      <section className="flex flex-col w-mobile mx-auto tablet:w-tablet desktop:w-desktop self-stretch">
        <div className="flex flex-col items-start p-4 gap-4 tablet:py-6 tablet:px-10 desktop:py-10 desktop:px-20 self-stretch">
          <Explore />

          {window.innerWidth < 1440 ? (
            <>
              <Tab tabs={tabs} onTabs={handleTabs} />
              <Options />
            </>
          ) : (
            <HorizontalLayout tabs={tabs} onTabs={handleTabs} />
          )}
        </div>

        {tabs.tab1 && <NFTSection />}

        {tabs.tab2 && <Container />}

        {tabs.tab3 && <UserSection />}
      </section>
    </>
  );
};
