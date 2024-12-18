import { Outlet } from "react-router-dom";
import { Explore, HorizontalLayout, Options, Tab } from "./";
import { useResize } from "../../../helper/useResize";

export const NFT = () => {
  const { documentSize } = useResize();

  return (
    <section className="flex flex-col w-mobile mx-auto tablet:w-tablet desktop:w-desktop self-stretch">
      <div className="flex flex-col items-start p-4 gap-4 tablet:py-6 tablet:px-10 desktop:py-10 desktop:px-20 self-stretch">
        <Explore />

        {documentSize === "mobile" ||
          (documentSize === "tablet" && (
            <>
              <Tab />
              <Options />
            </>
          ))}
        {documentSize === "desktop" && <HorizontalLayout />}
      </div>
      <Outlet />
    </section>
  );
};
