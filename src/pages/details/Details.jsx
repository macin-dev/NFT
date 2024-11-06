import { useParams } from "react-router-dom";
import { Card, Image, Content } from ".";
import { useEffect, useState } from "react";
import { vault } from "../../../data/collections";

export const Details = () => {
  const [nftItem, setNftItem] = useState({});
  const { itemID } = useParams();

  useEffect(() => {
    const getItemByID = (itemID) =>
      vault.filter((item) => item.ultIId === itemID)[0];

    const item = getItemByID(itemID);
    setNftItem(item);
  }, [nftItem, itemID]);

  return (
    <>
      <section className="bg-white w-mobile flex flex-col py-6 px-4 gap-8 mx-auto tablet:gap-16 tablet:flex-row tablet:p-10 tablet:w-tablet desktop:w-desktop desktop:px-[11.8125rem] desktop:py-[3.75rem]">
        <Image itemURL={nftItem.asset} />
        <Card
          userName={nftItem.userName}
          itemName={nftItem.itemName}
          itemPrice={nftItem.price}
        />
      </section>
      <Content token={nftItem.ultIId} />
    </>
  );
};
