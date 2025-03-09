import { useContext } from "react";
import { CollectionContext } from "../../context/CollectionProvider.jsx";
import NftCard from "../../components/global/nftcard/NftCard.jsx";

const GridView = () => {
  const { collections } = useContext(CollectionContext);

  return (
    <section className="grid grid-cols-2 gap-3 tablet:flex-grow tablet:shrink-0 tablet:gap-x-3 tablet:gap-y-4 desktop:grid-cols-4 desktop:gap-3">
      {collections.map((item, i) => (
        <div
          key={i}
          className="w-full h-[15.625rem] tablet:h-[17.5rem] desktop:h-[20rem]"
        >
          <NftCard
            itemID={item.ultIId}
            url={item.asset}
            userName={item.userName}
            text={item.itemName}
            price={`${item.price} ETH`}
          />
        </div>
      ))}
    </section>
  );
};

export default GridView;
