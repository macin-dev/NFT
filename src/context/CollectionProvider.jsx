import { createContext, useEffect, useState } from "react";
import { vault } from "../../data/collections";

export const CollectionContext = createContext(null);

export function CollectionProvider({ children }) {
  const [filterBy, setFilterBy] = useState(null);
  const [collections, setCollections] = useState(vault);

  const handleAddNewItem = (item) => {
    setCollections([item, ...collections]);
  };

  // Set new parameters for rendering new data
  const handleFilterItemsBy = ({ type, isActive }) => {
    setFilterBy((prev) => ({ ...prev, [type]: { isActive: !isActive } }));
  };

  console.log("re-render");

  // API CALL SIMULATION
  useEffect(() => {
    if (!filterBy) return;
    // Filter NFT by Blockchain type
    let noResults = null;
    const filteredData = vault.filter((item) => {
      if (filterBy[item.blockchain] && filterBy[item.blockchain].isActive) {
        noResults = true;
        return item;
      }
    });

    // If values matched, re-render filtered collections
    if (filteredData.length > 0) {
      // Set new values
      setCollections(filteredData);
    } else if (noResults) {
      console.log("no results were found :(");
    } else {
      // if not matches, set the default state
      setCollections(vault);
      setFilterBy(null);
    }
  }, [filterBy]);

  return (
    <CollectionContext.Provider
      value={{
        collections,
        onAddNewItem: handleAddNewItem,
        handleFilterItemsBy,
      }}
    >
      {children}
    </CollectionContext.Provider>
  );
}
