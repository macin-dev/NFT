import { useContext } from "react";
import { CollectionContext } from "../../context/CollectionProvider.jsx";
import { GridConfigContext } from "../../context/GridConfigContext.jsx";
import NftCard from "../../components/feature-specific/card-item-grid/NftCard.jsx";

const GridView = () => {
  const { collections } = useContext(CollectionContext);
  const { gridConfig } = useContext(GridConfigContext);

  return (
    <section
      className={`${gridConfig.parentStyles} grid grid-cols-2 gap-3 tablet:flex-grow tablet:shrink-0 tablet:gap-x-3 tablet:gap-y-4 desktop:gap-3`}
    >
      {collections.map((item, i) => (
        <div
          key={i}
          className={`${gridConfig.containerStyles} w-full h-[15.625rem] tablet:h-[17.5rem]`}
        >
          <NftCard
            itemID={item.ultIId}
            url={item.asset}
            userName={item.userName}
            text={item.itemName}
            price={`${item.price} ETH`}
            cardDimensions={gridConfig.cardStyles}
          />
        </div>
      ))}
    </section>
  );
};

export default GridView;
