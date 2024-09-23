export const Group_2 = ({ title, value }) => {
  return (
    <div className="flex flex-col w-20 items-start gap-1 tablet:flex-grow tablet:flex-shrink-0 tablet:basis-0">
      <p className="text-light-element-secondary text-[0.75rem] leading-4">
        {title}
      </p>
      <p className="text-light-element-primary text-sm font-medium tracking-default">
        {value}
      </p>
    </div>
  );
};
