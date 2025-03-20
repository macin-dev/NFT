import { Outlet } from "react-router-dom";
import { GridConfigProvider } from "../../../context/GridConfigContext.jsx";
import HeaderExplore from "./HeaderExplore.jsx";
import NavBarLists from "./NavBarLists.jsx";

const NavBarExplore = () => {
  return (
    <GridConfigProvider>
      <section className="flex flex-col self-stretch w-mobile mx-auto tablet:w-tablet desktop:w-desktop">
        <HeaderExplore />
        <NavBarLists />
        <Outlet />
      </section>
    </GridConfigProvider>
  );
};

export default NavBarExplore;
