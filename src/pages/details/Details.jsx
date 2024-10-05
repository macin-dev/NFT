import { useParams } from "react-router-dom";
import { Card, Image, Content } from ".";
import { useEffect, useState } from "react";
import { userItems } from "../../components/user/profile/data";

export const Details = () => {
  const [nftItem, setNftItem] = useState({});
  const { itemID } = useParams();

  useEffect(() => {
    const getItemByID = (itemID) =>
      userItems.filter((item) => item.id === itemID)[0];

    const item = getItemByID(itemID);
    setNftItem(item);
  }, [nftItem]);

  return (
    <>
      <section className="bg-white w-mobile flex flex-col py-6 px-4 gap-8 mx-auto tablet:gap-16 tablet:flex-row tablet:p-10 tablet:w-tablet desktop:w-desktop desktop:px-[11.8125rem] desktop:py-[3.75rem]">
        <Image itemURL={nftItem.url} />
        <Card />
      </section>
      <Content token={nftItem.id} />
    </>
  );
};
