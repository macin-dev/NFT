import PropTypes from "prop-types";
import { Crypto_Icon } from "../../common/selected-button/Crypto_Icon";
import BlockchainActive from "./BlockchainActive";
import BlockchainText from "./BlockchainText";

const BlockchainType = ({ value, iconUrl, status, onFilterByBlockchain }) => {
  const { isActive } = status;
  return (
    <button
      onClick={() => onFilterByBlockchain(status)}
      className={`${
        isActive ? "bg-light-surface-soft" : "bg-white"
      } h-12 p-3 flex items-center gap-3 rounded-xl`}
    >
      {iconUrl ? <Crypto_Icon iconUrl={iconUrl} alt="Check Icon" /> : null}
      <BlockchainText value={value} isActive={isActive} />
      {isActive ? <BlockchainActive /> : null}
    </button>
  );
};

BlockchainType.propTypes = {
  value: PropTypes.string,
  iconUrl: PropTypes.string,
  status: PropTypes.object,
  onFilterByBlockchain: PropTypes.func,
};

export default BlockchainType;
