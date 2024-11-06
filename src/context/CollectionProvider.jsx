import { createContext, useState } from "react";
import { vault } from "../../data/collections";

export const CollectionContext = createContext(null);

export function CollectionProvider({ children }) {
  const [collections, setCollections] = useState(vault);

  const handleAddNewItem = (item) => {
    setCollections([item, ...collections]);
  };

  return (
    <CollectionContext.Provider
      value={{ collections, onAddNewItem: handleAddNewItem }}
    >
      {children}
    </CollectionContext.Provider>
  );
}
