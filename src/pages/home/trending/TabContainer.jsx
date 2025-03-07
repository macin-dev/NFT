import { OneTab, SecondTab, ThirdTab } from "./index.js";

export const TabContainer = () => {
  return (
    <div className="flex flex-col w-[23.438rem] pt-[3.75rem] px-4 pb-0 items-start gap-4 bg-white tablet:justify-between tablet:flex-row tablet:content-start tablet:self-stretch tablet:w-full tablet:p-0">
      <OneTab />
      <div className="flex flex-col w-full gap-4 tablet:flex-row tablet:gap-4 tablet:w-auto">
        <SecondTab />
        <ThirdTab />
      </div>
    </div>
  );
};
