import { Dbutton_active_lg } from "./dark/Dbutton_active_lg";
import { Dropdown } from "./Dropdown";
import { types } from "./options";
import { Wbutton_active_lg } from "./white/Wbutton_active_lg";

export const List = ({ onDropdown, dropdown }) => {
  return (
    <div className="flex flex-col gap-2 py-3 px-4 flex-grow shrink-0 basis-0">
      <div className="flex flex-col py-1 flex-grow shrink-0 basis-0 self-stretch overflow-y-auto">
        {types.map((type) => (
          <Dropdown
            key={type}
            type={type}
            onDropdown={onDropdown}
            dropdown={dropdown[type.toLowerCase()]}
          />
        ))}
      </div>

      <Wbutton_active_lg value="Clear" />
      <Dbutton_active_lg value="Apply" />
    </div>
  );
};
