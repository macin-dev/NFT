import { InputContainer } from "./";

export const Dropdown = ({ icon, label, onInputChange, options }) => {
  return (
    <InputContainer label={label}>
      <label className="bg-light-surface-soft flex items-center py-4 px-6 gap-2.5 self-stretch rounded-2xl relative">
        {icon.name && <img src={icon.svg} alt={icon.name} />}

        <select
          className="bg-transparent outline-none z-20 text-light-element-secondary appearance-none text-sm text-left tracking-default flex-grow shrink-0 basis-0"
          name="currencyType"
          id="currencyType"
          onChange={onInputChange}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.name}
            </option>
          ))}
        </select>

        <div className="absolute right-6 top-4 bg-light-surface-medium flex justify-center items-center w-6 h-6 p-1 rounded-lg">
          <img src="/assets/icons/chevron-down.svg" alt="Arrow down icon" />
        </div>
      </label>
    </InputContainer>
  );
};
