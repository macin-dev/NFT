import { Link } from "react-router-dom";

export const BlackButton_lg = ({ value, icon }) => {
  return (
    <button className="bg-light-element-primary-btn inline-flex h-11 py-3 px-5 items-center justify-center gap-2 shrink-0 rounded-xl">
      {value && (
        <Link to="/sing-up" className="text-white text-sm tracking-default">
          {value}
        </Link>
      )}
      {icon && <img src={icon} alt="Button" />}
    </button>
  );
};
