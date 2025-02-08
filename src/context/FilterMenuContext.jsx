import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const FilterMenuContext = createContext(null);

export const FilterMenuProvider = ({ children }) => {
  const [filterMenu, setFilterMenu] = useState(true);

  const onFilterMenu = () => {
    setFilterMenu(!filterMenu);
  };

  return (
    <FilterMenuContext.Provider value={{ filterMenu, onFilterMenu }}>
      {children}
    </FilterMenuContext.Provider>
  );
};

FilterMenuProvider.propTypes = {
  children: PropTypes.any,
};
