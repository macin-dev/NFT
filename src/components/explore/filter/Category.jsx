import { useState } from "react";
import { categoryOpt } from "./data";
import { Option } from "./Option";

export const Category = () => {
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
      {categoryOpt.map((c, i) => (
        <Option
          key={c}
          value={c}
          onSelected={handleSelected}
          select={`opt_${i + 1}`}
          isSelected={selected[`opt_${i + 1}`]}
        />
      ))}
    </>
  );
};
