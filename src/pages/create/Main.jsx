import { Content, Preview } from "./";

export const Main = () => {
  return (
    <section className="w-mobile mx-auto tablet:flex tablet:items-start tablet:gap-8 tablet:justify-center tablet:w-tablet tablet:py-20 tablet:px-10 desktop:w-desktop desktop:justify-end desktop:pr-[11.8125rem] desktop:pl-0">
      <Content />
      {window.innerWidth >= 960 && <Preview />}
    </section>
  );
};
