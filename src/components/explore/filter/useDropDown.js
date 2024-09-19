import { useState } from "react";

export const useDropdown = ({ initialValues }) => {
  const [selected, setSelected] = useState(initialValues);

  const handleSelected = (opt) => {
    setSelected((prev) => ({
      ...prev,
      [opt]: !selected[opt],
    }));
  };

  console.log(initialValues);

  return {
    selected,
    handleSelected,
  };
};
