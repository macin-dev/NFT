import {useContext} from "react";
import {FilterMenuContext} from "../../../context/FilterMenuContext.jsx";
import Lists from "./Lists.jsx";
import GridOptions from "./GridOptions.jsx";
import Search from "../../common/search/Search.jsx";
import CommandIcon from "../../common/search/CommandIcon.jsx";
import ToggleBtn from "../../common/toggle/ToggleBtn.jsx";

const NavBarLists = () => {
    const { onFilterMenu } = useContext(FilterMenuContext);
    return (
        <div
            className="flex flex-row flex-wrap items-start self-stretch p-4 gap-y-4 gap-x-3 tablet:pb-6 tablet:pt-4 tablet:px-10 desktop:p-10 desktop:pt-4 desktop:px-20 desktop:gap-x-4 desktop:flex-nowrap">
            <Lists/>
            <Search size="fit" placeholder="Search">
                <CommandIcon/>
            </Search>
            <ToggleBtn
                onToggle={onFilterMenu}
                value="Filters"
                url="/assets/icons/sliders.svg"
                alt="display a menu of options"
                flex_order={true}
            />
            <ToggleBtn
                value="Trending"
                url="/assets/icons/filter.svg"
                alt="display menu of options"
            />
            <GridOptions/>
        </div>

    )
}

export default NavBarLists;