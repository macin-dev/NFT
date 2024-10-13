import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuContent } from "./mobile/MenuContent";

export const Mobile = () => {
  const [menu, setMenu] = useState(false);

  const handleToggleMenu = (showMenu) => {
    setMenu(showMenu);
  };

  return (
    <>
      <div className="flex items-center gap-6">
        <Link to="/">
          <img src="/assets/icons/shortLogo.svg" alt="Logo Ultrarare" />
        </Link>
        <img src="/assets/icons/search.svg" alt="Search icon" />
      </div>
      <button
        onClick={() => handleToggleMenu(!menu)}
        className="flex items-center gap-4"
      >
        <img
          className="p-2"
          src="/assets/icons/shopping-bag.svg"
          alt="Shopping bag icon"
        />
        <img src="/assets/icons/menu.svg" alt="Menu icon" />
      </button>

      {menu && <MenuContent />}
    </>
  );
};
