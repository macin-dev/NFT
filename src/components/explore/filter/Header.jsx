export const Header = ({ onToggle }) => {
  return (
    <div className="flex items-center p-4 gap-2.5">
      <h2 className="text-light-element-primary flex-grow shrink-0 text-[1.5rem] font-semibold leading-7 tracking-[0.0625rem]">
        Filters
      </h2>
      <button
        onClick={onToggle}
        className="flex items-center justify-center p-3.5 h-12 w-12 shrink-0 rounded-xl bg-light-surface-soft"
      >
        <img src="./assets/icons/x.svg" alt="Close Icon" />
      </button>
    </div>
  );
};
