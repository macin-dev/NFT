import PropTypes from "prop-types";
import Badge from "./Badge";
import PlusIcon from "./PlusIcon";

const style = {
  small: {
    padding: "8px 12px",
    fontSize: 14,
  },
  medium: {
    padding: "12px 16px",
    fontSize: 16,
  },
  large: {
    padding: "16x 20px",
    fontSize: 18,
  },
};

const ClassicTab = ({
  size,
  length,
  children,
  isActive = false,
  icon = false,
}) => {
  return (
    <button
      style={style[size]}
      className={`${
        isActive
          ? "border-b-2 border-light-element-primary text-light-element-primary"
          : "text-light-element-secondary"
      }  flex gap-1.5 font-normal tracking-default`}
    >
      {icon ? <PlusIcon width={size == "small" ? "20px" : "24px"} /> : false}
      {children}
      <Badge value={length} />
    </button>
  );
};

ClassicTab.propTypes = {
  size: PropTypes.string,
  length: PropTypes.number,
  children: PropTypes.any,
  isActive: PropTypes.bool,
  icon: PropTypes.bool,
};

export default ClassicTab;
