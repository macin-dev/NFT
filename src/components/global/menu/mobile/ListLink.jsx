import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export const ListLink = ({ path, text }) => {
  return (
    <NavLink
      to={path}
      className="text-light-element-secondary flex gap-2 items-center h-14 px-4 text-[1rem] font-semibold tracking-[-0.013rem] self-stretch hover:bg-light-surface-soft"
    >
      {text}
    </NavLink>
  );
};

ListLink.propTypes = {
  path: PropTypes.string,
  text: PropTypes.string,
};
