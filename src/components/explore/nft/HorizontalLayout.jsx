import { Search } from "../../global/search";
import ToggleBtn from "../../toggle/ToggleBtn";
import { Tab, Layout } from "./";

export const HorizontalLayout = () => {
  return (
    <div className="flex gap-4 self-stretch">
      <ToggleBtn
        size="large"
        value="Filters"
        url="/assets/icons/sliders.svg"
        alt="show or hide filter menu"
      />
      <Tab />
      <Search placeholder="Type for NFTs" />
      <ToggleBtn
        size="large"
        value="Trending"
        url="/assets/icons/chevron-down.svg"
        alt="menu of options"
      />
      <Layout />
    </div>
  );
};
