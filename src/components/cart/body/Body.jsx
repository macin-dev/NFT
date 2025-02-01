import PropTypes from "prop-types";
import { BlackButton_xl } from "../../global/button";
import { Card } from "./card";

export const Body = ({ cart }) => {
  return (
    <div className="flex flex-col gap-2 items-start py-3 px-4 flex-grow shrink-0 basis-0 self-stretch">
      <button className="bg-white text-light-element-secondary self-end w-auto text-[1rem] text-center leading-6 font-semibold tracking-default p-1">
        clear all
      </button>
      <div className="flex flex-col items-start gap-2 flex-grow shrink-0 basis-0 self-stretch overflow-y-auto">
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

Body.propTypes = {
  cart: PropTypes.array,
};
