export const Form = ({ children, onSubmit }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-10 self-stretch tablet:items-end"
    >
      {children}
    </form>
  );
};
