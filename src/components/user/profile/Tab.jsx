export const Tab = () => {
  return (
    <div className="flex flex-col p-4 gap-4 tablet:px-10 tablet:py-6 desktop:px-20 desktop:py-10 desktop:gap-8">
      <div className="flex self-stretch">
        <div className="flex p-2 gap-1.5 border-b-2 border-light-element-primary">
          <p className="text-light-element-primary text-sm font-semibold tracking-default">
            Owned
          </p>
          <div className="bg-light-surface-soft py-0.5 px-2.5 rounded-2xl">
            <p className="text-light-element-secondary text-[0.75rem] leading-4 tracking-default">
              5.2k
            </p>
          </div>
        </div>

        <div className="flex p-2 gap-1.5 border-b-2">
          <p className="text-light-element-secondary text-sm font-semibold tracking-default">
            On sale
          </p>
          <div className="bg-light-surface-soft py-0.5 px-2.5 rounded-2xl">
            <p className="text-light-element-secondary text-[0.75rem] leading-4 tracking-default">
              44
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
