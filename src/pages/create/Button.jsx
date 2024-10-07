export const Button = ({ active = false, value, icon }) => {
  return (
    <button
      className={`${
        active ? "border-2 border-light-surface-hard" : ""
      } bg-light-surface-soft h-14 flex gap-2.5 py-[0.875rem] px-2.5 justify-center items-center flex-grow shrink-0 basis-0 rounded-2xl`}
    >
      <img className="" src={icon} alt="Tag Icon" />
      <p
        className={`${
          active ? "text-light-element-primary" : "text-light-element-tertiary"
        } text-[1rem] leading-6 tracking-default`}
      >
        {value}
      </p>
    </button>
  );
};
