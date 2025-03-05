import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import TabText from "./TabText.jsx";

const navLinkStyles =
  "inline-flex items-center justify-center gap-2.5 flex-grow shrink-0 basis-auto rounded-xl shadow-sm";

const sizeTab = {
    small: {
        padding: "8px 12px",
    },
    medium: {
        padding: "12px 16px",
    },
    large: {
        padding: "16px 20px",
    }
}

const TabWhite = ({ value, size, fontSize, path, children }) => {
  return (
    <NavLink
      to={path}
      style={sizeTab[size]}
      className={({ isActive }) => {
        return isActive
          ? `bg-white ${navLinkStyles}`
          : `bg-light-surface-soft ${navLinkStyles}`;
      }}
    >
        { value ? <TabText value={value} fontSize={fontSize} /> : null }
        { children}
    </NavLink>
  );
};

TabWhite.propTypes = {
  value: PropTypes.string,
  path: PropTypes.string,
    size: PropTypes.string.isRequired,
    fontSize: PropTypes.number,
    children: PropTypes.node
};

export default TabWhite;
