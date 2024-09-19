import { Blockchain, Category, Status } from "./";
import { Dbutton_active_lg } from "./dark/Dbutton_active_lg";
import { Dropdown } from "./Dropdown";
import { Wbutton_active_lg } from "./white/Wbutton_active_lg";

export const Container = ({ onDropdown, dropdown }) => {
  return (
    <div className="bg-white flex flex-col gap-2 py-3 px-4 flex-grow shrink-0 basis-0 tablet:w-[18.5rem] tablet:basis-auto tablet:py-1 tablet:px-0 tablet:shrink-0 tablet:rounded-2xl tablet:border-light-border tablet:border-[0.7px]">
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
        ></Dropdown>

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

      <div className="tablet:hidden flex flex-col gap-2 self-stretch">
        <Wbutton_active_lg value="Clear" />
        <Dbutton_active_lg value="Apply" />
      </div>
    </div>
  );
};
