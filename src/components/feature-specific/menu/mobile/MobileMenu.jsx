import PropTypes from "prop-types";
import Container from "./Container.jsx";
import MenuLogo from "./MenuLogo.jsx";
import Search from "./Search.jsx";
import ActionButton from "../../../common/action-button/ActionButton.jsx";
import Navbar from "../Navbar.jsx";
import DisplayMobileMenu from "./DisplayMobileMenu.jsx";
import MenuButton from "./MenuButton.jsx";

const MobileMenu = ({ onClickCart, menu, handleToggleMenu }) => {
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

export default MobileMenu;

MobileMenu.propTypes = {
  onClickCart: PropTypes.func,
    menu: PropTypes.bool,
    handleToggleMenu: PropTypes.func,
};
