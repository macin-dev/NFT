import { NavLink } from "react-router-dom";

const navLinkStyles =
  "inline-flex flex-grow py-3 px-4 items-center justify-center gap-2.5 shrink-0 basis-0 rounded-xl shadow-sm";

export const Tab_md = ({ value, path }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => {
        return isActive
          ? `bg-white ${navLinkStyles}`
          : `bg-light-surface-soft ${navLinkStyles}`;
      }}
    >
      <p className="text-light-element-primary text-sm font-medium tracking-default">
        {value}
      </p>
    </NavLink>
  );
};

//
