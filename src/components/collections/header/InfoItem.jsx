export const InfoItem = ({ title, value, type }) => {
  return (
    <div className="flex flex-col gap-1 flex-grow shrink-0 basis-0">
      <h4 className="text-light-element-secondary text-[0.75rem] font-normal leading-4 tablet:text-sm">
        {title}
      </h4>
      <div className="flex gap-1.5">
        <p className="text-light-element-primary text-sm font-medium tracking-default tablet:text-lg tablet:leading-6">
          {value}
        </p>
        <p className="text-light-element-primary text-[0.75rem] leading-4 tablet:text-lg tablet:leading-6">
          {type}
        </p>
      </div>
    </div>
  );
};
