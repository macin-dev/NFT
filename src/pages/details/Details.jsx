import { Card, Image, Content } from ".";

export const Details = () => {
  return (
    <>
      <section className="bg-white w-mobile flex flex-col py-6 px-4 gap-8 mx-auto tablet:gap-16 tablet:flex-row tablet:p-10 tablet:w-tablet desktop:w-desktop desktop:px-[11.8125rem] desktop:py-[3.75rem]">
        <Image />
        <Card />
      </section>
      <Content />
    </>
  );
};
