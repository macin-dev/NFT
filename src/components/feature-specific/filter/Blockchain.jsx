import { typesOpt } from "./data.js";
import { useDropdown } from "../../../hooks/useDropdown.js";
import {Selected} from "../../common/selected-button/Selected.jsx";
import {Unselected} from "../../common/selected-button/Unselected.jsx";

export const Blockchain = () => {
  const { selected, handleSelected } = useDropdown({
    opt_1: false,
    opt_2: false,
    opt_3: false,
    opt_4: false,
  });

  return (
    <div className="flex flex-col px-2 gap-1 self-stretch">
      {typesOpt.map((obj, i) =>
        selected[`opt_${i + 1}`] ? (
          <Selected
            key={obj.name}
            value={obj.name}
            url={obj.url}
            alt="Check Icon"
            onSelected={handleSelected}
            select={`opt_${i + 1}`}
          />
        ) : (
          <Unselected
            key={obj.name}
            value={obj.name}
            url={obj.url}
            alt="Check Icon"
            onSelected={handleSelected}
            select={`opt_${i + 1}`}
          />
        )
      )}
    </div>
  );
};
