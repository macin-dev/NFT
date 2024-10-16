import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuContent } from "./mobile/MenuContent";
import { usePreventScrolling } from "../../../helper/usePreventScrolling";

export const Mobile = ({ onClickCart, cart }) => {
  const [menu, setMenu] = useState(false);
  const location = useLocation();

  const handleToggleMenu = (showMenu) => {
    setMenu(showMenu);
  };

  // Track the current location to
  // manage the menu component's state
  useEffect(() => {
    setMenu(false);
  }, [location, cart]);

  // Custom hook to mange scrolling
  usePreventScrolling(menu);

  return (
    <>
      <div className="flex items-center gap-6">
        <Link to="/">
          <img src="/assets/icons/shortLogo.svg" alt="Logo Ultrarare" />
        </Link>
        <img src="/assets/icons/search.svg" alt="Search icon" />
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={() => onClickCart()}
          className="bg-light-surface-soft flex items-center rounded-lg"
        >
          <img
            className="p-2"
            src="/assets/icons/shopping-bag.svg"
            alt="Shopping bag icon"
          />
        </button>

        <button
          onClick={() => handleToggleMenu(!menu)}
          className="flex items-center"
        >
          <img className="p-2" src="/assets/icons/menu.svg" alt="Menu icon" />
        </button>
      </div>

      {menu && <MenuContent />}
    </>
  );
};
