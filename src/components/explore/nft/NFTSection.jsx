import {useContext} from "react";
import {useResize} from "../../../helper/useResize.js";
import {usePreventScrolling} from "../../../helper/index.js";
import { FilterMenuContext } from "../../../context/FilterMenuContext";
import GridView from "./GridView";
import Filter from "../filter/Filter.jsx";

export const NFTSection = () => {
  const { filterMenu, onFilterMenu } = useContext(FilterMenuContext);
  const { documentSize } = useResize();
    const filterState = filterMenu && documentSize === "mobile";
    usePreventScrolling(filterState);

  return (
    <div className="flex flex-col py-6 px-4 gap-3 tablet:flex-row tablet:py-0 tablet:px-10 tablet:pb-10 tablet:gap-8 desktop:px-20 desktop:pb-20">
        { filterMenu ? <Filter onToggle={onFilterMenu} documentSize={documentSize} /> : null }
      <GridView />
    </div>
  );
};
