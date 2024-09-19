import { useState } from "react";

export const useDropdown = ({ ...lists }) => {
  const [selected, setSelected] = useState(lists);

  const handleSelected = (opt) => {
    setSelected((prev) => ({
      ...prev,
      [opt]: !selected[opt],
    }));
  };

  return {
    selected,
    handleSelected,
  };
};
