import { NavLink } from "react-router-dom";

export const ListLink = ({ path, textValue, icon }) => {
  return (
    <NavLink
      to={path}
      className="text-light-element-secondary flex gap-2 items-center h-14 px-4 text-[1rem] font-semibold tracking-[-0.013rem] self-stretch hover:bg-light-surface-soft"
    >
      <img src={icon} alt="icon" />
      {textValue}
    </NavLink>
  );
};
