export const Dropdown_lg = ({ value, url, alt, onToggle }) => {
  return (
    <button
      onClick={onToggle && onToggle}
      className="bg-light-surface-soft flex items-center gap-2.5 px-6 py-4 rounded-2xl self-stretch"
    >
      <p className="text-light-element-primary flex-grow text-sm text-left tracking-default">
        {value}
      </p>

      <div className="bg-light-surface-medium flex w-6 h-6 p-1 items-center justify-center rounded-lg">
        <img src={url} alt={alt} />
      </div>
    </button>
  );
};
