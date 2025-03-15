import { useDropdown } from "../../../hooks/useDropdown";
import BlockchainType from "./BlockchainType";
import { statusOpt } from "./data";

const MapStatusLists = () => {
  const { selected, handleSelected } = useDropdown({
    opt_1: {
      name: "opt_1",
      type: "listed",
      isActive: false,
    },
    opt_2: {
      name: "opt_2",
      type: "onsale",
      isActive: false,
    },
    opt_3: {
      name: "opt_3",
      type: "new",
      isActive: false,
    },
    opt_4: {
      name: "opt_4",
      type: "bids",
      isActive: false,
    },
    opt_5: {
      name: "opt_5",
      type: "mints",
      isActive: false,
    },
  });

  const handleFilterByStatus = (statusOption) => {
    handleSelected(statusOption);
  };

  return (
    <>
      {statusOpt.map((statusType, index) => (
        <BlockchainType
          key={index}
          value={statusType}
          status={selected[`opt_${index + 1}`]}
          onFilterByBlockchain={handleFilterByStatus}
        />
      ))}
    </>
  );
};

export default MapStatusLists;
