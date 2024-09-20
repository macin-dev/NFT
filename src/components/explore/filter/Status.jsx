import { statusOpt } from "./data";
import { Selected, Unselected } from "../../global/filters";
import { useDropdown } from "../hooks/useDropdown";

export const Status = () => {
  const { selected, handleSelected } = useDropdown({
    opt_1: false,
    opt_2: false,
    opt_3: false,
    opt_4: false,
    opt_5: false,
  });

  return (
    <div className="flex flex-col px-2 gap-1 self-stretch">
      {statusOpt.map((s, i) =>
        selected[`opt_${i + 1}`] ? (
          <Selected
            key={s}
            value={s}
            onSelected={handleSelected}
            select={`opt_${i + 1}`}
          />
        ) : (
          <Unselected
            key={s}
            value={s}
            onSelected={handleSelected}
            select={`opt_${i + 1}`}
          />
        )
      )}
    </div>
  );
};
