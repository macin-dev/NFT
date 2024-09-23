export const Group_1 = ({ title, value, type }) => {
  return (
    <div className="flex flex-col w-20 items-start gap-1 tablet:flex-grow tablet:flex-shrink-0 tablet:basis-0">
      <h4 className="text-light-element-secondary text-[0.75rem] leading-4 tablet:text-sm">
        {title}
      </h4>

      <div className="flex items-start gap-[0.3125rem]">
        <p className="text-light-element-primary text-sm font-medium tracking-default tablet:text-[1rem] tablet:leading-6">
          {value}
        </p>
        <p className="text-light-element-secondary text-[0.75rem] leading-4 tablet:text-[1rem] tablet:leading-6">
          {type}
        </p>
      </div>
    </div>
  );
};
