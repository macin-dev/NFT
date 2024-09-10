export const Price = () => {
  return (
    <>
      <div className="flex gap-2 items-center justify-center flex-grow tablet:w-[6.25rem]">
        <p className="text-light-element-primary text-[1rem] font-medium leading-6 tracking-[-0.012rem]">
          4.6
        </p>
        <p className="text-light-element-secondary text-[0.75rem] leading-4">
          ETH
        </p>
      </div>
      <div className="w-[0.063rem] h-[2.563rem] bg-light-border"></div>
      <div className="flex items-center justify-center flex-grow tablet:w-[6.25rem]">
        <p className="text-[#0E9766] text-[1rem] leading-6 tracking-[-0.012rem]">
          -2%
        </p>
      </div>
    </>
  );
};
