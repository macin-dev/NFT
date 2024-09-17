import { Search } from "../../global/search";

export const Options = ({ onToggle }) => {
  return (
    <div className="flex gap-3 self-stretch">
      <Search placeholder="Search" />
      <button
        onClick={onToggle}
        className="flex w-12 h-12 p-4 rounded-xl bg-light-surface-soft"
      >
        <img src="./assets/icons/sliders.svg" alt="Icon menu" />
      </button>
      <button className="flex w-12 h-12 p-4 rounded-xl bg-light-surface-soft">
        <img src="./assets/icons/filter.svg" alt="Icon for filtering" />
      </button>
    </div>
  );
};
