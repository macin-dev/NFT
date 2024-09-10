export const SecondTab = () => {
  return (
    <div className="flex p-1 items-start gap-[0.063rem] self-stretch rounded-2xl bg-light-surface-soft">
      <div className="w-full flex py-2 px-3 items-center justify-center flex-grow bg-white shadow-sm rounded-xl">
        <p className="text-light-element-primary text-sm tracking-[-0.012rem] font-medium">
          1H
        </p>
      </div>
      <div className="w-full flex py-2 px-3 items-center justify-center flex-grow">
        <p className="text-light-element-secondary text-sm tracking-[-0.012rem]">
          1D
        </p>
      </div>
      <div className="w-full flex py-2 px-3 items-center justify-center flex-grow">
        <p className="text-light-element-secondary text-sm tracking-[-0.012rem]">
          7D
        </p>
      </div>
      <div className="w-full flex py-2 px-3 items-center justify-center flex-grow">
        <p className="text-light-element-secondary text-sm tracking-[-0.012rem]">
          30D
        </p>
      </div>
    </div>
  );
};
