import PropTypes from "prop-types";
import ActionButton from "../../../global/ActionButton.jsx";

const MenuButton = ({ menu, handleToggleMenu }) => {
  return (
    <>
      {!menu ? (
        <ActionButton
          handlerEvent={() => handleToggleMenu()}
          color={false}
          pathIcon="/assets/icons/menu.svg"
        />
      ) : (
        <ActionButton
          handlerEvent={() => handleToggleMenu()}
          color={false}
          pathIcon="/assets/icons/xMenu.svg"
        />
      )}
    </>
  );
};

MenuButton.propTypes = {
  menu: PropTypes.bool,
  handleToggleMenu: PropTypes.func,
};

export default MenuButton;
