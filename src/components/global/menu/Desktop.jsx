import { Link } from "react-router-dom";
import { BlackButton_lg } from "../button/BlackButton_lg";
import { Search } from "../search";
import { List, Theme } from "./";

export const Desktop = ({ onClickCart }) => {
  return (
    <>
      <div className="flex items-center gap-6 flex-grow shrink-0">
        <Link to="/">
          <img src="/assets/Union.svg" alt="Ultrarare Logo" />
        </Link>
        <div className="w-[0.063rem] h-4 bg-light-border"></div>
        <List />
      </div>

      <div className="w-[26.625rem]">
        <Search placeholder="Type for collections, NFTs etc" />
      </div>

      <div className="inline-flex items-center gap-4 flex-grow shrink-0 justify-end">
        <BlackButton_lg path="/sing-up" value="Connect Wallet" />

        <button
          onClick={() => onClickCart()}
          className="flex p-[0.875rem] w-[3rem] h-[3rem] rounded-xl bg-light-surface-soft"
        >
          <img src="/assets/icons/shopping-bag.svg" alt="shopping bag icon" />
        </button>

        <Theme />
      </div>
    </>
  );
};
