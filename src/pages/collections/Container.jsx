import Collection from "./Collection.jsx";

export const Container = () => {
  return (
    <section className="bg-white flex flex-col w-mobile py-6 px-4 gap-3 mx-auto tablet:w-tablet tablet:pt-0 tablet:px-10 tablet:pb-20 tablet:gap-6 desktop:w-desktop desktop:px-20 desktop:pb-20">
      <Collection />
      <Collection />
    </section>
  );
};
