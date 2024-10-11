import { InputContainer } from "./";

export const InputSelect = ({ value, onInputChange, numberName }) => {
  return (
    <InputContainer label="Price">
      <div className="bg-light-surface-soft flex items-center gap-2.5 self-stretch rounded-2xl">
        <div className="flex gap-1.5 p-4">
          <select
            className="text-light-element-secondary appearance-none bg-transparent text-[1rem] leading-6 h-6 outline-none"
            name="ethereum"
            id="ethereum"
          >
            <option value="wETH">wETH</option>
          </select>

          <img src="/assets/icons/chevron-down.svg" alt="Arrow down icon" />
        </div>
        <input
          className="text-light-element-primary bg-transparent flex-grow shrink-0 basis-0 outline-none"
          type="number"
          name={numberName}
          onChange={onInputChange}
          value={value}
        />
      </div>
    </InputContainer>
  );
};
