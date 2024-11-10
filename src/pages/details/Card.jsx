import { Buttons, Owner, Buy } from "./";

export const Card = ({ idItem, userName, itemName, itemPrice }) => {
  return (
    <div className="flex flex-col items-start gap-6 self-stretch tablet:gap-10 tablet:flex-grow tablet:shrink-0 tablet:basis-0">
      <Owner userName={userName} itemName={itemName} />
      <Buttons />
      <Buy id={idItem} itemPrice={itemPrice} />
    </div>
  );
};
