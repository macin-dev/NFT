import { createContext, useState } from "react";

const gridConfigValues = {
  gridCol4: {
    configID: "gridCol4",
    parentStyles: "desktop:grid-cols-4",
    containerStyles: "desktop:h-[320px]",
    cardStyles: "desktop:h-[236px]",
  },
  gridCol5: {
    configID: "gridCol5",
    parentStyles: "desktop:grid-cols-5",
    containerStyles: "desktop:h-[260px]",
    cardStyles: "desktop:h-[176px]",
  },
  gridCol4RandomDimensions: {
    configID: "gridCol4RandomDimensions",
  },
};

// Create global state using context API
export const GridConfigContext = createContext(null);

// Define a top level component for accessing values
export const GridConfigProvider = ({ children }) => {
  const [gridConfig, setGridConfig] = useState(gridConfigValues.gridCol4);

  // Update state function
  const handleGridConfig = (configGridView) => {
    const loadConfig = gridConfigValues[configGridView];
    setGridConfig(loadConfig);
  };

  return (
    <GridConfigContext.Provider
      value={{ gridConfig, onGridConfig: handleGridConfig }}
    >
      {children}
    </GridConfigContext.Provider>
  );
};
