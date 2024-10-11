import { InputContainer } from "./";

export const TextArea = ({ label, value, onInputChange }) => {
  return (
    <InputContainer label={label}>
      <textarea
        className="bg-light-surface-soft text-light-element-primary text-[1rem] leading-6 tracking-default h-[10rem] p-4 self-stretch rounded-2xl"
        name="description"
        id="description"
        value={value}
        onChange={onInputChange}
      ></textarea>
    </InputContainer>
  );
};
