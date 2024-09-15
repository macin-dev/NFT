import { Price } from "./Price";

export const Row = ({ number, url, name }) => {
  return (
    <div className="flex py-3 items-center self-stretch bg-white">
      <div className="flex w-[3.75rem] h-8 justify-start">
        <p className="w-8 h-8 flex items-center justify-center shrink-0 text-sm font-semibold tracking-[-0.012rem] text-light-element-secondary rounded-2xl bg-light-surface-soft">
          {number}
        </p>
      </div>

      <div className="flex items-center gap-4 flex-grow">
        <img
          className="w-12 h-12 rounded-xl object-cover"
          src={`${url}`}
          alt="Avatar 1"
        />
        <h3 className="text-light-element-primary text-[1rem] font-semibold leading-6 tracking-[-0.012rem]">
          {name}
        </h3>
      </div>

      <div className="flex h-[2.563rem] rounded-[0.625rem] bg-light-surface-soft">
        <Price />
      </div>
    </div>
  );
};
