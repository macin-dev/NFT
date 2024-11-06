import { Outlet } from "react-router-dom";
import { Explore, HorizontalLayout, Options, Tab } from "./";

export const NFT = () => {
  return (
    <section className="flex flex-col w-mobile mx-auto tablet:w-tablet desktop:w-desktop self-stretch">
      <div className="flex flex-col items-start p-4 gap-4 tablet:py-6 tablet:px-10 desktop:py-10 desktop:px-20 self-stretch">
        <Explore />

        {window.innerWidth < 1440 ? (
          <>
            <Tab />
            <Options />
          </>
        ) : (
          <HorizontalLayout />
        )}
      </div>
      <Outlet />
    </section>
  );
};
