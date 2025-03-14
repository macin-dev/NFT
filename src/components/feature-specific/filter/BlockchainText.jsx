import PropTypes from "prop-types";

const BlockchainText = ({ value, isActive }) => {
  return (
    <span
      className={`${
        isActive
          ? "text-light-element-primary "
          : "text-light-element-secondary"
      } text-start text-sm tracking-default flex-grow shrink-0 basis-0`}
    >
      {value}
    </span>
  );
};

BlockchainText.propTypes = {
  value: PropTypes.string,
  isActive: PropTypes.bool,
};

export default BlockchainText;
