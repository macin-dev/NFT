import PropTypes from "prop-types";
import {Theme} from "../Theme.jsx";
import SearchIcon from "../../search/SearchIcon.jsx";
import Search from "../../search/Search.jsx";
import Button from "../../button/Button.jsx";

const NavbarRight = ({ onClickCart }) => {
    return (
        <div className="inline-flex items-center gap-4 flex-grow shrink-0 justify-end">
            <div className="hidden tablet:block desktop:hidden desktop:w-0 desktop:h-0">
                <Search size="small" >
                    <SearchIcon />
                </Search>
            </div>
            <Button size="large" color="black" value="Connect Wallet" path="/sing-up" />
            <button
                onClick={onClickCart}
                className="flex p-[0.875rem] w-[3rem] h-[3rem] rounded-xl bg-light-surface-soft"
            >
                <img src="/assets/icons/shopping-bag.svg" alt="shopping bag icon"/>
            </button>
            <Theme/>
        </div>
    )
}

NavbarRight.propTypes = {
    onClickCart: PropTypes.func,
}

export default NavbarRight;