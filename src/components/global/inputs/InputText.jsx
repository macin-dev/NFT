import { InputContainer } from "./";

export const InputText = ({ label, value, onInputChange }) => {
  return (
    <InputContainer label={label}>
      <input
        className="bg-light-surface-soft text-light-element-primary text-[1rem] leading-6 tracking-default p-4 rounded-2xl self-stretch"
        placeholder="Enter item name"
        type="text"
        name="name"
        onChange={onInputChange}
        id="name"
        value={value}
      />
    </InputContainer>
  );
};
