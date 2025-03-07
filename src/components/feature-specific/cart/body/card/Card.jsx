import { ItemBody, ItemImage } from "./";

export const Card = ({ asset, userName, price, itemName }) => {
  return (
    <div className="bg-white flex items-start self-stretch rounded-2xl">
      <ItemImage asset={asset} />
      <ItemBody userName={userName} itemName={itemName} price={price} />
    </div>
  );
};
