import { Dropdown } from "../../global/dropdown/Dropdown";
import { Search } from "../../global/search";
import { Layout } from "./Layout";

export const Options = ({ onToggle }) => {
  return (
    <div className="flex gap-3 self-stretch">
      <Search placeholder="Search" />
      <Dropdown
        value="Filters"
        url="./assets/icons/sliders.svg"
        onToggle={onToggle}
      />

      <Dropdown
        value="Trending"
        url="./assets/icons/filter.svg"
        onToggle={onToggle}
      />

      <Layout />
    </div>
  );
};
