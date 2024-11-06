import { useContext } from "react";
import { Card } from "../../global/nftcard/Card";
import { CollectionContext } from "../../../context/CollectionProvider";

export const Grid_default = () => {
  const { collections } = useContext(CollectionContext);

  return (
    <div className="grid grid-cols-2 gap-3 tablet:flex-grow tablet:gap-x-3 tablet:gap-y-4 desktop:grid-cols-4">
      {collections.map((item, i) => (
        <div
          key={i}
          className="w-[10.3125rem] h-[15.625rem] tablet:w-[16.875rem] tablet:h-[17.5rem] desktop:w-[14.3125rem] desktop:h-[20rem]"
        >
          <Card
            itemID={item.ultIId}
            url={item.asset}
            userName={item.userName}
            text={item.itemName}
            price={`${item.price} ETH`}
          />
        </div>
      ))}
    </div>
  );
};
