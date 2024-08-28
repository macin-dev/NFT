import { List, Theme } from "./";

export const Tablet = () => {
  return (
    <>
      <div className="flex items-center gap-6 flex-grow shrink-0">
        <div>
          <img src="./assets/Union.svg" alt="Ultrarare Logo" />
        </div>
        <div className="w-[0.063rem] h-4 bg-light-border"></div>
        <List />
      </div>

      <div className="flex items-center gap-4 flex-grow shrink-0 justify-end">
        <div className="flex p-[0.875rem] h-12 rounded-xl bg-light-surface-soft">
          <img src="./assets/icons/search.svg" alt="search icon" />
        </div>

        <button className="flex items-center justify-center h-12 py-3 px-5 rounded-xl tracking-[-0.013rem] text-sm bg-light-element-primary-btn text-white">
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
