import { useState } from "react";

export const useDropdown = ({ ...lists }) => {
  const [selected, setSelected] = useState(lists);

  const handleSelected = (status) => {
    setSelected((prev) => ({
      ...prev,
      [status.name]: {
        name: status.name,
        type: status.type,
        isActive: !status.isActive,
      },
    }));
  };

  return {
    selected,
    handleSelected,
  };
};
