export const Option = ({ value, url, onSelected, select, isSelected }) => {
  return (
    <button
      onClick={() => onSelected(select)}
      className={`flex h-12 p-3 gap-3 items-center self-stretch rounded-xl ${
        isSelected ? "bg-light-surface-soft" : ""
      }`}
    >
      {url && (
        <div className="w-6 h-6">
          <img src={url} alt="Type Blockchain icon" />
        </div>
      )}
      <span className="text-light-element-secondary text-start text-sm tracking-default flex-grow shrink-0 basis-0">
        {value}
      </span>

      <div
        className={`w-6 h-6 flex items-center justify-center p-1 rounded-lg ${
          isSelected ? "bg-light-surface-medium" : "bg-white"
        }`}
      >
        {isSelected && (
          <img
            src="./assets/icons/check.svg"
            alt="Check Icon for selecting options"
          />
        )}
      </div>
    </button>
  );
};
