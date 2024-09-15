import { Explore, Suscribe, BottomBar } from ".";

export const Container = () => {
  return (
    <div className="flex flex-col w-[23.4375rem] py-6 px-4 gap-10 items-start bg-white tablet:w-[60rem] tablet:py-6 tablet:px-10 tablet:gap-6 desktop:py-[3.75rem] desktop:px-10 desktop:gap-10">
      <Explore />
      <Suscribe />
      <BottomBar />
    </div>
  );
};
