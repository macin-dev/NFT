export const Price_input = ({ value }) => {
  const id = value.toLowerCase();
  const title = value.toUpperCase();

  return (
    <div className="flex flex-grow flex-shrink-0 basis-0 py-3 px-4 gap-2.5 items-center rounded-2xl bg-light-surface-soft">
      <input
        className="w-full flex-grow flex-shrink-0 basis-0 text-[1rem] leading-6 text-light-element-secondary tracking-default bg-transparent outline-none"
        placeholder="0"
        type="number"
        min="0"
        name={id}
        id={id}
      />
      <p className="flex-grow flex-shrink-0 basis-0 text-[1rem] leading-6 tracking-default text-light-element-secondary">
        {title}
      </p>
    </div>
  );
};
