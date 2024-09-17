import { Search } from "../search";
import { List, Theme } from "./";

export const Desktop = () => {
  return (
    <>
      <div className="flex items-center gap-6 flex-grow shrink-0">
        <div>
          <img src="./assets/Union.svg" alt="Ultrarare Logo" />
        </div>
        <div className="w-[0.063rem] h-4 bg-light-border"></div>
        <List />
      </div>

      <div className="w-[26.625rem]">
        <Search placeholder="Type for collections, NFTs etc" />
      </div>

      <div className="flex items-center gap-4 flex-grow shrink-0 justify-end">
        <button className="flex items-center justify-center h-11 py-3 px-5 rounded-xl tracking-[-0.013rem] text-sm bg-light-element-primary-btn text-white">
          Connect Wallet
        </button>

        <div className="flex p-[0.875rem] w-[3rem] h-[3rem] rounded-xl bg-light-surface-soft">
          <img src="./assets/icons/shopping-bag.svg" alt="shopping bag icon" />
        </div>

        <Theme />
      </div>
    </>
  );
};
