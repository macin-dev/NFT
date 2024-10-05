import { BlackButton_xl } from "../../components/global/button/BlackButton_xl";

export const Buy = () => {
  return (
    <div className="bg-light-surface-soft flex flex-col p-3 gap-3 justify-center self-stretch rounded-2xl">
      <div className="flex flex-col items-start gap-1 p-4 self-stretch">
        <p className="text-light-element-secondary text-[1rem] leading-6 font-semibold tracking-default">
          Price
        </p>

        <div className="flex items-start gap-1 self-stretch">
          <div className="flex items-start gap-1 flex-grow shrink-0 basis-0">
            <p className="text-light-element-primary text-[2rem] leading-10 font-semibold">
              0.005
            </p>
            <p className="text-light-element-secondary text-[1rem] leading-6 tracking-default">
              ETH
            </p>
          </div>
          <p className="text-light-surface-hard text-lg leading-6 tracking-default">
            $863.22
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3 self-stretch">
        <div className="flex gap-3 self-stretch">
          <BlackButton_xl value="Buy now" grow="flex-grow" />
          <BlackButton_xl icon="./assets/icons/plus.svg" />
        </div>

        <button className="h-[3.125rem] flex items-center justify-center py-3.5 self-stretch">
          <p className="text-light-element-primary text-lg leading-6 tracking-default">
            Place a bid
          </p>
        </button>
      </div>
    </div>
  );
};
