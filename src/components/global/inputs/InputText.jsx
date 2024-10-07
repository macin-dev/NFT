import { InputContainer } from "./";

export const InputText = ({ value }) => {
  return (
    <InputContainer label={value}>
      <input
        className="bg-light-surface-soft text-light-element-primary text-[1rem] leading-6 tracking-default p-4 rounded-2xl self-stretch"
        placeholder="Enter item name"
        type="text"
        name={value}
        id={value}
      />
    </InputContainer>
  );
};
