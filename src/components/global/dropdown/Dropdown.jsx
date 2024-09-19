export const Dropdown = ({ value, url, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="flex items-center gap-2.5 w-12 h-12 p-4 rounded-xl bg-light-surface-soft tablet:py-3 tablet:w-auto tablet:h-auto"
    >
      {value && (
        <p className="hidden text-light-element-primary text-sm tracking-default tablet:block">
          {value}
        </p>
      )}
      <div className="tablet:w-6 tablet:h-6 tablet:p-1 tablet:items-center tablet:justify-center">
        <img src={url} alt="Icon for filtering" />
      </div>
    </button>
  );
};
