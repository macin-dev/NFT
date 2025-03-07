export const Input = ({ id, type, placeholder }) => {
  return (
    <input
      className="rounded-2xl p-4 text-base border-light-surface-soft bg-light-surface-soft self-stretch text-light-element-primary"
      type={type}
      id={id}
      placeholder={placeholder}
    />
  );
};
