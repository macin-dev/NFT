import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Search } from "../../global/search";
import ToggleBtn from "../../toggle/ToggleBtn";
import GridOptions from "./GridOptions";
import Tab from "./Tab";
import HeaderExplore from "./HeaderExplore";
import Filter from "../filter/Filter";
import { FilterMenuContext } from "../../../context/FilterMenuContext";

const NavBar = () => {
  const { filterMenu, onFilterMenu } = useContext(FilterMenuContext);

  return (
    <section className="flex flex-col self-stretch w-mobile mx-auto tablet:w-tablet desktop:w-desktop">
      <HeaderExplore />
      <div className="flex flex-row flex-wrap items-start self-stretch p-4 gap-y-4 gap-x-3 tablet:pb-6 tablet:pt-4 tablet:px-10 desktop:p-10 desktop:pt-4 desktop:px-20 desktop:gap-x-4 desktop:flex-nowrap">
        <Tab />
        <Search placeholder="Search" />
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
      {filterMenu && window.innerWidth < 960 ? (
        <Filter onToggle={onFilterMenu} toggle={filterMenu} />
      ) : (
        false
      )}
    </section>
  );
};

export default NavBar;
