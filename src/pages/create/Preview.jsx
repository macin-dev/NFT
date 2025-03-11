export const Preview = ({ children }) => {
  return (
    <div className="tablet:w-[17rem] flex flex-col items-start gap-4 desktop:w-[18.5rem]">
      <p className="text-light-element-primary text-[1rem] leading-6 font-semibold tracking-default">
        Preview
      </p>
      {children}
    </div>
  );
};
