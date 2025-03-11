export const InputContainer = ({ children, label }) => {
  const capitalized = label.charAt(0).toUpperCase() + label.slice(1);

  return (
    <div className="flex flex-col items-start gap-1 self-stretch">
      <label
        className="text-light-element-primary text-[1rem] leading-6 font-semibold tracking-default"
        htmlFor="name"
      >
        {capitalized}
      </label>
      {children}
    </div>
  );
};
