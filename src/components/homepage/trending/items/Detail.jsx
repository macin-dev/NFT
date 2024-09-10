import { Price } from "./";

export const Detail = () => {
  return (
    <div className="flex flex-col items-center gap-4 self-stretch">
      <div className="flex items-start self-stretch">
        <div className="flex items-center justify-center flex-row w-full">
          <p className="text-light-element-secondary text-[0.75rem] leading-4 uppercase">
            Floor price
          </p>
        </div>
        <div className="flex items-center justify-center flex-row w-full">
          <p className="text-light-element-secondary text-[0.75rem] leading-4 uppercase">
            Floor change
          </p>
        </div>
      </div>

      <div className="flex h-[41px] justify-center items-center self-stretch rounded-[10px] bg-light-surface-soft">
        <Price />
      </div>
    </div>
  );
};
