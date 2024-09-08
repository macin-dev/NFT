export const OneTab = () => {
  return (
    <div className="flex p-1 items-start gap-[1px] self-stretch rounded-2xl bg-light-surface-soft tablet:w-auto tablet:self-start">
      <div className="w-full flex justify-center items-center py-2 px-3 gap-2.5 flex-grow rounded-xl bg-white shadow-sm tablet:w-auto">
        <p className="text-sm font-medium tracking-[-0.2px] text-light-element-primary">
          Trending
        </p>
      </div>
      <div className="w-full flex justify-center items-center py-2 px-3 gap-2.5 flex-grow text-light-element-secondary tablet:w-auto">
        <p className="text-sm tracking-[-0.2px] text-light-element-secondary">
          Top collections
        </p>
      </div>
    </div>
  );
};
