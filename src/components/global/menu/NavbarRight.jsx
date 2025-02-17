import {BlackButton_lg} from "../../common/button/index.js";
import {Theme} from "./Theme.jsx";
import SearchIcon from "../../common/search/SearchIcon.jsx";
import Search from "../../common/search/Search.jsx";

const NavbarRight = () => {
    return (
        <div className="inline-flex items-center gap-4 flex-grow shrink-0 justify-end">
            <div className="hidden tablet:block desktop:hidden desktop:w-0 desktop:h-0">
                <Search size="small" >
                    <SearchIcon />
                </Search>
            </div>
            <BlackButton_lg path="/sing-up" value="Connect Wallet"/>
            <button
                className="flex p-[0.875rem] w-[3rem] h-[3rem] rounded-xl bg-light-surface-soft"
            >
                <img src="/assets/icons/shopping-bag.svg" alt="shopping bag icon"/>
            </button>
            <Theme/>
        </div>
    )
}

export default NavbarRight;