import { useDropdown } from "../../../hooks/useDropdown";
import BlockchainType from "./BlockchainType";
import { categoryOpt } from "./data";

const MapCategoriesLists = () => {
  const { selected, handleSelected } = useDropdown({
    opt_1: {
      name: "opt_1",
      type: "art",
      isActive: false,
    },
    opt_2: {
      name: "opt_2",
      type: "video",
      isActive: false,
    },
    opt_3: {
      name: "opt_3",
      type: "photography",
      isActive: false,
    },
    opt_4: {
      name: "opt_4",
      type: "music",
      isActive: false,
    },
    opt_5: {
      name: "opt_5",
      type: "collectibles",
      isActive: false,
    },
  });

  const handleFilterByCategories = (categoriesOption) => {
    handleSelected(categoriesOption);
  };

  return (
    <>
      {categoryOpt.map((category, index) => (
        <BlockchainType
          key={index}
          value={category}
          status={selected[`opt_${index + 1}`]}
          onFilterByBlockchain={handleFilterByCategories}
        />
      ))}
    </>
  );
};

export default MapCategoriesLists;
