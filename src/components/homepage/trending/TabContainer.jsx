import { OneTab, SecondTab, ThirdTab } from "./";

export const TabContainer = () => {
  return (
    <div className="flex flex-col w-[375px] pt-[60px] px-4 pb-0 items-start gap-4 bg-white tablet:justify-between tablet:flex-row tablet:content-start tablet:self-stretch tablet:w-full">
      <OneTab />
      <div className="flex flex-col w-full gap-4 tablet:flex-row tablet:gap-4 tablet:w-auto">
        <SecondTab />
        <ThirdTab />
      </div>
    </div>
  );
};
