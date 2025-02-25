import PropTypes from "prop-types";

const PlusIcon = ({ width }) => {
  return (
    <img
      style={{ width: `${width}` }}
      src="/assets/icons/plus-dark.svg"
      alt="Plus icon"
    />
  );
};

PlusIcon.propTypes = {
  width: PropTypes.string,
};

export default PlusIcon;
