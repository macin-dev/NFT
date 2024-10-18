import { useState } from "react";
import { usePreventScrolling } from "../../../helper/usePreventScrolling";
import { Dropdown_md, Dropdown_sm } from "../../global/dropdown";
import { Search } from "../../global/search";
import { Layout } from "./Layout";
import { Filter } from "../filter";

export const Options = () => {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(!toggle);
  };

  // custom hook for preventing scrolling
  usePreventScrolling(toggle);

  return (
    <div className="flex gap-3 self-stretch">
      <Search placeholder="Search" />

      {window.innerWidth < 960 ? (
        <>
          <Dropdown_sm
            icon="./assets/icons/sliders.svg"
            alt="filtering icon to display a menu of options"
            onToggle={onToggle}
          />
          <Dropdown_sm
            icon="./assets/icons/filter.svg"
            alt="filtering icon to display a menu of options"
          />
        </>
      ) : (
        <>
          <Dropdown_md
            value="Filters"
            url="./assets/icons/sliders.svg"
            alt="filtering icon to display a menu of options"
          />
          <Dropdown_md
            value="Trending"
            url="./assets/icons/chevron-down.svg"
            alt="filtering icon to display a menu of options"
          />
        </>
      )}

      <Layout />

      {toggle && <Filter onToggle={onToggle} />}
    </div>
  );
};
