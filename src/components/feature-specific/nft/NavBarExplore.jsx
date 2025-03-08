import { useContext } from "react";
import { Outlet } from "react-router-dom";
import ToggleBtn from "../../common/toggle/ToggleBtn.jsx";
import GridOptions from "./GridOptions.jsx";
import Tab from "./Tab.jsx";
import HeaderExplore from "./HeaderExplore.jsx";
import { FilterMenuContext } from "../../../context/FilterMenuContext.jsx";
import Search from "../../common/search/Search.jsx";
import CommandIcon from "../../common/search/CommandIcon.jsx";

const NavBarExplore = () => {
  const { onFilterMenu } = useContext(FilterMenuContext);

  return (
    <section className="flex flex-col self-stretch w-mobile mx-auto tablet:w-tablet desktop:w-desktop">
      <HeaderExplore />
      <div className="flex flex-row flex-wrap items-start self-stretch p-4 gap-y-4 gap-x-3 tablet:pb-6 tablet:pt-4 tablet:px-10 desktop:p-10 desktop:pt-4 desktop:px-20 desktop:gap-x-4 desktop:flex-nowrap">
        <Tab />
        <Search size="fit" placeholder="Search" >
            <CommandIcon />
        </Search>
        <ToggleBtn
          onToggle={onFilterMenu}
          value="Filters"
          url="/assets/icons/sliders.svg"
          alt="display a menu of options"
          flex_order={true}
        />
        <ToggleBtn
          value="Trending"
          url="/assets/icons/filter.svg"
          alt="display menu of options"
        />
        <GridOptions />
      </div>
      <Outlet />
    </section>
  );
};

export default NavBarExplore;
