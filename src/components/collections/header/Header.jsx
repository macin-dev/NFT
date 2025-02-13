import { BlackButton_lg } from "../../common/button/BlackButton_lg";
import { ColName } from "./ColName";
import { Image } from "./Image";
import { Info } from "./Info";

export const Header = () => {
  return (
    <section className="bg-white flex flex-col w-mobile tablet:w-tablet desktop:w-desktop">
      <Image />

      <div className="flex flex-col py-14 px-4 pb-6 self-stretch tablet:pt-20 tablet:px-10 tablet:pb-12 desktop:px-20">
        <div className="flex flex-col gap-8 self-stretch tablet:items-start tablet:gap-6">
          <ColName />

          <BlackButton_lg value="Place floor bid" />

          <p className="text-light-element-secondary text-[0.75rem] leading-4 tablet:order-first tablet:text-sm tablet:w-[45.8125rem]">
            Phasellus pharetra porta sodales. Quisque a felis neque. Vivamus sed
            vulputate ex. Donec ullamcorper pharetra efficitur. Donec faucibus
            sapien non tellus
          </p>

          <div className="flex flex-col gap-4 self-stretch flex-wrap tablet:w-[45.8125rem] tablet:flex-row tablet:gap-4">
            <Info />
            <Info />
          </div>
        </div>
      </div>
    </section>
  );
};
