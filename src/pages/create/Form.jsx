export const Form = ({ children }) => {
  return (
    <form
      // onSubmit={handleSubmit}
      className="flex flex-col gap-10 self-stretch tablet:items-end"
    >
      {children}
    </form>
  );
};
