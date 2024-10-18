import { FilterItemsMenu } from "../filter";
import { Grid_default } from "./Grid_default";

export const NFTSection = () => {
  return (
    <div className="flex flex-col py-6 px-4 gap-3 tablet:flex-row tablet:items-start tablet:py-0 tablet:px-10 tablet:pb-10 tablet:gap-8 desktop:px-20 desktop:pb-20">
      <div className="hidden tablet:block">
        <FilterItemsMenu />
      </div>

      <Grid_default />
    </div>
  );
};
