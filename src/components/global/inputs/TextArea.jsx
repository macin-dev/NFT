import { InputContainer } from "./";

export const TextArea = ({ value }) => {
  return (
    <InputContainer label={value}>
      <textarea
        className="bg-light-surface-soft text-light-element-primary text-[1rem] leading-6 tracking-default h-[10rem] p-4 self-stretch rounded-2xl"
        name={value}
        id={value}
      ></textarea>
    </InputContainer>
  );
};
