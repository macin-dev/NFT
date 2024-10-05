import { Link } from "react-router-dom";

export const WhiteButton_lg = ({ value, icon, path }) => {
  return (
    <Link to={path}>
      <button className="bg-light-surface-secondary-btn inline-flex h-11 py-3 px-5 items-center justify-center gap-2 shrink-0 rounded-xl cursor-pointer">
        {value && (
          <p className="text-light-element-primary text-sm tracking-default">
            {value}
          </p>
        )}
        {icon && <img src={icon} alt="Button" />}
      </button>
    </Link>
  );
};
