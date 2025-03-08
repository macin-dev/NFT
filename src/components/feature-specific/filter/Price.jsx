import ToggleBtn from "../../common/toggle/ToggleBtn.jsx";
import { Price_input } from "./Price_input.jsx";

export const Price = () => {
  return (
    <div className="flex flex-col px-2 items-start gap-1 self-stretch">
      <ToggleBtn
        size="medium"
        value="USD"
        url="/assets/icons/chevron-down.svg"
      />

      <div className="flex items-start gap-1 self-stretch">
        <Price_input value="min" />
        <Price_input value="max" />
      </div>
    </div>
  );
};
