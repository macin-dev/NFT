import { InputContainer } from "./";

export const InputText = ({ dispatch, value }) => {
  return (
    <InputContainer label="name">
      <input
        className="bg-light-surface-soft text-light-element-primary text-[1rem] leading-6 tracking-default p-4 rounded-2xl self-stretch"
        placeholder="Enter item name"
        type="text"
        name="name"
        onChange={(e) =>
          dispatch({
            type: "textInput",
            payload: { name: e.target.name, value: e.target.value },
          })
        }
        id="name"
        value={value}
      />
    </InputContainer>
  );
};
