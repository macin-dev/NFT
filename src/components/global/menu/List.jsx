import { NavLink } from "react-router-dom";

export const List = () => {
  return (
    <ul className="flex items-center gap-6">
      <NavLink
        to="/explore"
        className="text-light-element-secondary text-sm font-semibold tracking-[-0.013rem]"
      >
        Explore
      </NavLink>
      <li className="text-light-element-secondary text-sm font-semibold tracking-[-0.013rem]">
        Create
      </li>
      <li className="text-light-element-secondary text-sm font-semibold tracking-[-0.013rem]">
        Sell
      </li>
    </ul>
  );
};
