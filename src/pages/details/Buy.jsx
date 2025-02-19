import { useCart } from "../../context/CartProvider";
import Button from "../../components/common/button/Button.jsx";

const buyBtnStyles = {height: 56, padding: "12px 24px", flexGrow: 1, shrink: 0, borderRadius: 12}
const addBtnStyles = {width: "fit-content", padding: "12px 24px", borderRadius: 12 };

export const Buy = ({ id, itemPrice }) => {
  const { addNewItem, itemsOnCart } = useCart();
  const btnState = itemsOnCart[id];

  return (
    <div className="bg-light-surface-soft flex flex-col p-3 gap-3 justify-center self-stretch rounded-2xl">
      <div className="flex flex-col items-start gap-1 p-4 self-stretch">
        <p className="text-light-element-secondary text-[1rem] leading-6 font-semibold tracking-default">
          Price
        </p>

        <div className="flex items-start gap-1 self-stretch">
          <div className="flex items-start gap-1 flex-grow shrink-0 basis-0">
            <p className="text-light-element-primary text-[2rem] leading-10 font-semibold">
              {itemPrice}
            </p>
            <p className="text-light-element-secondary text-[1rem] leading-6 tracking-default">
              ETH
            </p>
          </div>
          <p className="text-light-surface-hard text-lg leading-6 tracking-default">
            $12.20
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3 self-stretch">
        <div className="flex gap-3 self-stretch">
          <Button customSize={buyBtnStyles} value="Buy now" color="black" />
          <Button customSize={addBtnStyles} color="black" disabled={btnState} onClick={() => addNewItem(id)}>
            <img src="/assets/icons/plus.svg" alt="plus icon" />
          </Button>
        </div>

        <button className="h-[3.125rem] flex items-center justify-center py-3.5 self-stretch">
          <p className="text-light-element-primary text-lg leading-6 tracking-default">
            Place a bid
          </p>
        </button>
      </div>
    </div>
  );
};
