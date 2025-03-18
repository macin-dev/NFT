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

  // API CALL SIMULATION
  useEffect(() => {
    if (!filterBy) return;
    // Filter NFT by Blockchain type
    const filteredData = vault.filter(
      (item) => filterBy[item.blockchain] && filterBy[item.blockchain].isActive
    );
    // Set new values
    setCollections(filteredData);
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
