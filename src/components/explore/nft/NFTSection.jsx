import { useContext } from "react";
import { FilterItemsMenu } from "../filter";
import { FilterMenuContext } from "../../../context/FilterMenuContext";
import GridView from "./GridView";
import FilterDisplay from "./FilterDisplay";

export const NFTSection = () => {
  const { filterMenu } = useContext(FilterMenuContext);
  return (
    <div className="flex flex-col py-6 px-4 gap-3 tablet:flex-row tablet:py-0 tablet:px-10 tablet:pb-10 tablet:gap-8 desktop:px-20 desktop:pb-20">
      {filterMenu ? (
        <FilterDisplay>
          <FilterItemsMenu />
        </FilterDisplay>
      ) : (
        false
      )}
      <GridView />
    </div>
  );
};
