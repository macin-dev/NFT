import { BlackButton_xl } from "../../global/button";
import { Card } from "./card";

export const Body = ({ cart }) => {
  return (
    <div className="flex flex-col gap-2 items-start py-3 px-4 flex-grow shrink-0 basis-0 self-stretch">
      {/* items */}
      <div className="flex flex-col items-start gap-2 flex-grow shrink-0 basis-0 self-stretch">
        <div className="flex justify-end items-center self-stretch">
          <button className="text-light-element-secondary text-[1rem] leading-6 font-semibold tracking-default">
            clear all
          </button>
        </div>

        {cart.map((item) => (
          <Card
            key={item.ultIId}
            asset={item.asset}
            userName={item.userName}
            itemName={item.itemName}
            price={item.price}
          />
        ))}
      </div>

      {/* Button */}
      <BlackButton_xl value="Buy" stretch="self-stretch" />
    </div>
  );
};
