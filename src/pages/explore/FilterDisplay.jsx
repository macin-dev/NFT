import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const FilterDisplay = ({ children }) => {
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    setTransition(true);
  }, []);

  return (
    <div
      className={`${
        transition ? "transition-filter max-w-80" : ""
      } bg-white max-w-0`}
    >
      {children}
    </div>
  );
};

FilterDisplay.propTypes = {
  children: PropTypes.any,
};

export default FilterDisplay;
