import { createContext, useState } from "react";
import { tempCollections } from "./data";

export const CollectionContext = createContext(null);

export function CollectionProvider({ children }) {
  const [collections, setCollections] = useState(tempCollections);

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
