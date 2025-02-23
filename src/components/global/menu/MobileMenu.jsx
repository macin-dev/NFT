import PropTypes from "prop-types";
import Container from "./mobile/Container";
import MenuLogo from "./mobile/MenuLogo";
import Search from "./mobile/Search";
import ActionButton from "../ActionButton";
import Navbar from "./Navbar";
import DisplayMobileMenu from "./mobile/DisplayMobileMenu";
import MenuButton from "./mobile/MenuButton";

export const MobileMenu = ({ onClickCart, menu, handleToggleMenu }) => {
    return (
    <Navbar>
      <Container>
        <MenuLogo />
        <Search />
      </Container>
      <Container>
        <ActionButton
          handlerEvent={onClickCart}
          color={true}
          pathIcon="/assets/icons/shopping-bag.svg"
        />
        <MenuButton handleToggleMenu={handleToggleMenu} menu={menu} />
      </Container>
      {menu && <DisplayMobileMenu menuState={menu} />}
    </Navbar>
  );
};

MobileMenu.propTypes = {
  onClickCart: PropTypes.func,
    menu: PropTypes.bool,
    handleToggleMenu: PropTypes.func,
};
