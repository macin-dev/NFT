import { Outlet } from "react-router-dom";
import HeaderExplore from "./HeaderExplore.jsx";
import NavBarLists from "./NavBarLists.jsx";

const NavBarExplore = () => {
  return (
    <section className="flex flex-col self-stretch w-mobile mx-auto tablet:w-tablet desktop:w-desktop">
      <HeaderExplore />
        <NavBarLists />
      <Outlet />
    </section>
  );
};

export default NavBarExplore;
