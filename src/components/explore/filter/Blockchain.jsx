import { useState } from "react";
import { Option } from "./Option";
import { typesOpt } from "./data";

export const Blockchain = () => {
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
      {typesOpt.map((obj, i) => (
        <Option
          key={obj.name}
          value={obj.name}
          url={obj.url}
          onSelected={handleSelected}
          select={`opt_${i + 1}`}
          isSelected={selected[`opt_${i + 1}`]}
        />
      ))}
    </>
  );
};
