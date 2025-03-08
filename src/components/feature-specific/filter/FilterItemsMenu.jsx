import { useState } from "react";
import { Blockchain, Category, Status, Price, Dropdown } from "./index.js";
import Button from "../../common/button/Button.jsx";

const filterButtons = {height: 48, paddingY: 12, paddingX: 20, fontSize: 14, borderRadius: 12}

export const FilterItemsMenu = () => {
  const [dropdown, setDropdown] = useState({
    blockchain: false,
    status: false,
    price: false,
    category: false,
    collections: false,
  });

  const onDropdown = (type) => {
    setDropdown({
      ...dropdown,
      [type]: !dropdown[type],
    });
  };

  return (
    <div className="bg-white flex flex-col gap-2 py-3 px-4 flex-grow shrink-0 tablet:w-[18.5rem] tablet:flex-grow-0 tablet:py-1 tablet:px-0 tablet:shrink-0 tablet:rounded-2xl tablet:border-light-border tablet:border-[0.7px]">
      <div className="flex flex-col gap-1 py-1 flex-grow shrink-0 basis-0 self-stretch overflow-y-auto tablet:overflow-visible">
        <Dropdown
          type="Blockchain"
          onDropdown={onDropdown}
          dropdown={dropdown["blockchain"]}
        >
          <Blockchain />
        </Dropdown>

        <Dropdown
          type="Status"
          onDropdown={onDropdown}
          dropdown={dropdown["status"]}
        >
          <Status />
        </Dropdown>

        <Dropdown
          type="Price"
          onDropdown={onDropdown}
          dropdown={dropdown["price"]}
        >
          <Price />
        </Dropdown>

        <Dropdown
          type="Category"
          onDropdown={onDropdown}
          dropdown={dropdown["category"]}
        >
          <Category />
        </Dropdown>

        <Dropdown
          type="Collection"
          onDropdown={onDropdown}
          dropdown={dropdown["collection"]}
        ></Dropdown>
      </div>

      {window.innerWidth < 960 && (
        <div className="tablet:hidden flex flex-col gap-2 self-stretch">
          <Button color="white" value="Clear" customSize={filterButtons} />
          <Button color="black" value="Apply" customSize={filterButtons} />
        </div>
      )}
    </div>
  );
};
