import { Type } from "./Type";

export const Dropdown = ({ type, onDropdown, dropdown }) => {
  const option = type.toLowerCase();

  return (
    <>
      <div className="flex justify-between items-center py-4 self-stretch">
        <h3 className="text-light-element-primary text-lg leading-6 tracking-default font-medium">
          {type}
        </h3>
        <button
          onClick={() => onDropdown(option)}
          className="flex justify-center items-center p-1 w-6 h-6 rounded-lg bg-light-surface-medium"
        >
          <img src="./assets/icons/chevron-down.svg" alt="Select icon" />
        </button>
      </div>

      {dropdown && (
        <>
          <Type blockchain="Ethereum" url="./assets/icons/ethereum-icon.svg" />
          <Type blockchain="BNB Chain" url="./assets/icons/bnb-icon.svg" />
          <Type
            blockchain="Avalanche"
            url="./assets/icons/avalanche-icon.svg"
          />
          <Type blockchain="Solana" url="./assets/icons/solana-icon.svg" />
        </>
      )}
    </>
  );
};
