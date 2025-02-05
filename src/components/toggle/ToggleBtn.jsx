import PropTypes from "prop-types";
import ToggleIcon from "./ToggleIcon";

const style = {
  small: {
    width: 48,
    height: 48,
    padding: 16,
    borderRadius: 12,
  },
  medium: {
    padding: "12px 16px",
    borderRadius: 16,
  },
  large: {
    padding: "16px 24px",
    borderRadius: 16,
  },
};

const ToggleBtn = ({ size, onToggle, value, url, alt }) => {
  const onToggleFun = () => {
    if (!onToggle) return;
    onToggle();
  };
  return (
    <button
      onClick={onToggleFun}
      style={style[size]}
      className="bg-light-surface-soft text-light-element-primary flex items-center gap-2.5 text-sm text-left tracking-default self-stretch"
    >
      {size !== "small" ? (
        <ToggleIcon value={value} url={url} alt={alt} />
      ) : (
        <img src={url} alt={alt} />
      )}
    </button>
  );
};

ToggleBtn.propTypes = {
  size: PropTypes.string,
  onToggle: PropTypes.func,
  value: PropTypes.string,
  url: PropTypes.string,
  alt: PropTypes.string,
};

export default ToggleBtn;
