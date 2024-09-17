import { useState } from "react";
import { Option } from "./Option";
import { statusOpt } from "./data";

export const Status = () => {
  const [selected, setSelected] = useState({
    opt_1: false,
    opt_2: false,
    opt_3: false,
    opt_4: false,
    all: false,
  });

  const handleSelected = (opt) => {
    setSelected((prev) => ({
      ...prev,
      [opt]: !selected[opt],
    }));
  };

  return (
    <>
      {statusOpt.map((s, i) => (
        <Option
          key={s}
          value={s}
          onSelected={handleSelected}
          select={`opt_${i + 1}`}
          isSelected={selected[`opt_${i + 1}`]}
        />
      ))}
    </>
  );
};
