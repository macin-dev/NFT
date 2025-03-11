import { InputContainer } from "./index.js";

export const TextArea = ({ dispatch, value }) => {
  return (
    <InputContainer label="description">
      <textarea
        className="bg-light-surface-soft text-light-element-primary text-[1rem] leading-6 tracking-default h-[10rem] p-4 self-stretch rounded-2xl"
        name="description"
        id="description"
        value={value}
        onChange={(e) =>
          dispatch({
            type: "textInput",
            payload: { name: e.target.name, value: e.target.value },
          })
        }
      ></textarea>
    </InputContainer>
  );
};
