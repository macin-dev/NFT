export const PriceSelection = ({
  active = false,
  value,
  icon,
  dispatch,
  name,
}) => {
  return (
    <label className="inline-block w-full h-14 relative">
      <input
        onChange={(e) =>
          dispatch({ type: "optionPrice", payload: e.target.name })
        }
        checked={value}
        className="h-0 w-0 opacity-0"
        type="checkbox"
        name={name}
      />
      <span
        className={`${
          active
            ? "text-light-element-primary border-light-surface-hard"
            : "text-light-element-tertiary border-light-surface-soft"
        } bg-light-surface-soft absolute top-0 right-0 bottom-0 left-0 rounded-2xl border-2 flex gap-2.5 justify-center items-center py-[0.875rem] px-2.5 cursor-pointer text-[1rem] leading-6 tracking-default`}
      >
        <img className="" src={icon} alt="Tag Icon" />
        {value}
      </span>
    </label>
  );
};
