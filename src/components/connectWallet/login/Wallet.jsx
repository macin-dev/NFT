import { WalletOptions, Headline, Rectangle } from ".";

export const Wallet = () => {
  return (
    <div className="w-mobile py-[5.25rem] justify-center tablet:flex tablet:py-0 tablet:w-tablet desktop:justify-start desktop:w-desktop mx-auto">
      <Rectangle />
      <div className="flex flex-col py-10 px-4 items-center justify-center gap-10 tablet:py-0 tablet:px-20 tablet:w-[40.5rem] desktop:pt-40 desktop:px-20 desktop:pb-0 desktop:w-[43.063rem]">
        <Headline />
        <WalletOptions />
      </div>
    </div>
  );
};
