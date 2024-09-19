import { Dropdown_md } from "../../global/dropdown/Dropdown_md";
import { Price_input } from "./Price_input";

export const Price = () => {
  return (
    <div className="flex flex-col px-2 items-start gap-1 self-stretch">
      <Dropdown_md value="USD" url="./assets/icons/chevron-down.svg" />

      <div className="flex items-start gap-1 self-stretch">
        <Price_input value="min" />
        <Price_input value="max" />
      </div>
    </div>
  );
};
