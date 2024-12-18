export const SwitchToggle = ({ value, dispatch, name }) => {
  return (
    <label className="inline-block relative w-[46px] h-6">
      <input
        onChange={(e) =>
          dispatch({ type: "toggleInput", payload: e.target.name })
        }
        checked={value}
        className="h-0 w-0 opacity-0"
        type="checkbox"
        name={name}
      />
      <span
        className={`${
          value
            ? "bg-light-element-primary-btn before:translate-x-[21px]"
            : "bg-light-element-tertiary"
        } absolute cursor-pointer top-0 left-0 right-0 bottom-0 duration-[0.3s] rounded-[58px] before:absolute before:content-[''] before:w-[21px] before:h-5 before:bottom-[2px] before:left-[2px] before:bg-white before:duration-[0.3s] before:rounded-[50%] `}
      />
    </label>
  );
};
