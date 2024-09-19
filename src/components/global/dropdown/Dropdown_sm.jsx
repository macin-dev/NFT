export const Dropdown_sm = ({ onToggle, icon, alt }) => {
  return (
    <button
      onClick={onToggle && onToggle}
      className="w-12 h-12 flex items-center gap-2.5 p-4 rounded-xl bg-light-surface-soft"
    >
      <img src={icon} alt={alt} />
    </button>
  );
};
