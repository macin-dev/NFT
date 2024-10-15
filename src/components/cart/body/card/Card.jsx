import { ItemBody, ItemImage } from "./";

export const Card = () => {
  return (
    <div className="bg-white flex items-start self-stretch rounded-2xl">
      <ItemImage />
      <ItemBody />
    </div>
  );
};
