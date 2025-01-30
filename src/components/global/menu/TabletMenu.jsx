import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { BlackButton_lg } from "../button";
import { List, Theme } from ".";
import Navbar from "./Navbar";

export const TabletMenu = ({ onClickCart }) => {
  return (
    <Navbar>
      <div className="flex items-center gap-6 flex-grow shrink-0">
        <Link to="/">
          <img src="/assets/Union.svg" alt="Ultrarare Logo" />
        </Link>
        <div className="w-[0.063rem] h-4 bg-light-border"></div>
        <List />
      </div>

      <div className="flex items-center gap-4 flex-grow shrink-0 justify-end">
        <div className="flex p-[0.875rem] h-12 rounded-xl bg-light-surface-soft">
          <img src="/assets/icons/search.svg" alt="search icon" />
        </div>

        <BlackButton_lg path="/sing-up" value="Connect Wallet" />

        <button
          onClick={() => onClickCart()}
          className="flex p-[0.875rem] w-[3rem] h-[3rem] rounded-xl bg-light-surface-soft"
        >
          <img src="/assets/icons/shopping-bag.svg" alt="shopping bag icon" />
        </button>

        <Theme />
      </div>
    </Navbar>
  );
};

TabletMenu.propTypes = {
  onClickCart: PropTypes.func,
};
