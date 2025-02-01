import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { usePreventScrolling } from "../../../helper/usePreventScrolling";
import Container from "./mobile/Container";
import MenuLogo from "./mobile/MenuLogo";
import Search from "./mobile/Search";
import ActionButton from "../ActionButton";
import Navbar from "./Navbar";
import DisplayMobileMenu from "./mobile/DisplayMobileMenu";
import PropTypes from "prop-types";
import MenuButton from "./mobile/MenuButton";

export const MobileMenu = ({ onClickCart, cart }) => {
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
    <Navbar>
      <Container>
        <MenuLogo />
        <Search />
      </Container>
      <Container>
        <ActionButton
          handlerEvent={() => onClickCart()}
          color={true}
          pathIcon="/assets/icons/shopping-bag.svg"
        />
        <MenuButton handleToggleMenu={handleToggleMenu} menu={menu} />
      </Container>
      {menu && <DisplayMobileMenu />}
    </Navbar>
  );
};

MobileMenu.propTypes = {
  onClickCart: PropTypes.func,
  cart: PropTypes.bool,
};
