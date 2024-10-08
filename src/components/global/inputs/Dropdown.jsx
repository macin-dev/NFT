import { InputContainer } from "./";

export const Dropdown = ({ icon, value, label }) => {
  return (
    <InputContainer label={label}>
      <button className="bg-light-surface-soft flex items-center py-4 px-6 gap-2.5 self-stretch rounded-2xl">
        {icon && (
          <img src="/assets/icons/ethereum-icon.svg" alt="Ethereum icon" />
        )}

        <p className="text-light-element-secondary text-sm text-left tracking-default flex-grow shrink-0 basis-0">
          {value}
        </p>
        <div className="bg-light-surface-medium flex justify-center items-center w-6 h-6 p-1 rounded-lg">
          <img src="/assets/icons/chevron-down.svg" alt="Arrow down icon" />
        </div>
      </button>
    </InputContainer>
  );
};
