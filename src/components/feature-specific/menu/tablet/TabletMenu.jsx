import PropTypes from "prop-types";
import NavbarLeft from "./NavbarLeft.jsx";
import MediumSearch from "./MediumSearch.jsx";
import CommandIcon from "../../search/CommandIcon.jsx";
import NavbarRight from "./NavbarRight.jsx";
import Search from "../../search/Search.jsx";

const TabletMenu = ({ onClickCart }) => {
  return (
    <>
        <NavbarLeft/>
        <MediumSearch>
            <Search size="medium" placeholder="Type for collections, NFTs etc">
                <CommandIcon />
            </Search>
        </MediumSearch>
        <NavbarRight onClickCart={onClickCart} />
    </>
  );
};

TabletMenu.propTypes = {
    onClickCart: PropTypes.func,
}

export default TabletMenu;