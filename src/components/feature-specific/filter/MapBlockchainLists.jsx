import { useDropdown } from "../../../hooks/useDropdown";
import BlockchainType from "./BlockchainType";
import { typesOpt } from "./data";

const MapBlockchainLists = () => {
  const { selected, handleSelected } = useDropdown({
    opt_1: {
      name: "opt_1",
      type: "ethereum",
      isActive: false,
    },
    opt_2: {
      name: "opt_2",
      type: "bnbchain",
      isActive: false,
    },
    opt_3: {
      name: "opt_3",
      type: "avalanche",
      isActive: false,
    },
    opt_4: {
      name: "opt_4",
      type: "solana",
      isActive: false,
    },
  });

  const hadleFilterByBlockchain = (blockchainOption) => {
    handleSelected(blockchainOption);
  };

  return (
    <>
      {typesOpt.map((list, index) => (
        <BlockchainType
          key={index}
          value={list.name}
          status={selected[`opt_${index + 1}`]}
          iconUrl={list.url}
          onFilterByBlockchain={hadleFilterByBlockchain}
        />
      ))}
    </>
  );
};

export default MapBlockchainLists;
