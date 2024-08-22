import { Input } from "./";

export const Field = ({ id, name, type, placeholder }) => {
  return (
    <div className="flex flex-col items-start gap-1 self-stretch">
      <label
        className="text-base tracking-[-0.013rem] font-semibold text-light-element-primary"
        htmlFor={id}
      >
        {name}
      </label>
      <Input type={type} id={id} placeholder={placeholder} />
    </div>
  );
};
