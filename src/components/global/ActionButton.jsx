import PropTypes from "prop-types";

const ActionButton = ({ handlerEvent, color, pathIcon }) => {
  return (
    <button
      onClick={handlerEvent}
      className={`${
        color ? "bg-light-surface-soft" : false
      } flex items-center rounded-lg`}
    >
      <img className="p-2" src={pathIcon} alt="Icon it represents an action" />
    </button>
  );
};

ActionButton.propTypes = {
  handlerEvent: PropTypes.func,
  color: PropTypes.bool,
  pathIcon: PropTypes.string,
};

export default ActionButton;
