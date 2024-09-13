import { CRectangle_Image, CRectangle_Item } from "./";

export const CRectangle = ({ url, width, position }) => {
  return (
    <div
      className={`flex ${width} ${position} h-[5.875rem] items-start rounded-2xl border-[0.0313rem] shadow-sm border-light-border bg-white absolute desktop:h-[8.375rem]`}
    >
      <CRectangle_Image url={url} />

      <div className="flex flex-col py-3 pl-2 pr-4 gap-3 flex-grow shrink-0 items-start">
        <h4 className="text-[1rem] h-[1.1875rem] font-medium leading-normal tracking-[-0.0313rem] text-light-element-primary desktop:h-auto">
          Clown Ape
        </h4>

        <div className="hidden desktop:flex desktop:items-center desktop:gap-2">
          <img
            className="w-6 h-6 rounded-[2.625rem]"
            src="./assets/cards/profile.jpeg"
            alt="Profile Image"
          />
          <p className="desktop:text-sm tracking-[-0.0125rem] text-light-element-secondary">
            Winter Madagascar
          </p>
        </div>

        <div className="flex self-stretch">
          <CRectangle_Item text="Price" />
          <CRectangle_Item text="Highest bid" />
        </div>
      </div>
    </div>
  );
};
