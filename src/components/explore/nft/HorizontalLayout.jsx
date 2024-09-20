import { Dropdown_lg } from "../../global/dropdown";
import { Search } from "../../global/search";
import { Tab, Layout } from "./";

export const HorizontalLayout = () => {
  return (
    <div className="flex gap-4 self-stretch">
      <Dropdown_lg
        value="Filters"
        url="./assets/icons/sliders.svg"
        alt="Filtering icon to display a menu of options"
      />

      <Tab />

      <Search placeholder="Type for NFTs" />

      <Dropdown_lg
        value="Trending"
        url="./assets/icons/chevron-down.svg"
        alt="Filtering icon to display a menu of options"
      />

      <Layout />
    </div>
  );
};
