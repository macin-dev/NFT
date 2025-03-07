export const BarContainer = () => {
  return (
    <div className="flex items-center self-stretch bg-white">
      <div className="flex w-[3.75rem] h-6 justify-start">
        <p className="w-8 flex items-center justify-center shrink-0 text-light-element-secondary">
          #
        </p>
      </div>

      <div className="flex items-start gap-2.5 flex-grow">
        <p className="text-light-element-secondary text-[0.75rem] leading-4 uppercase">
          Collection
        </p>
      </div>

      <div className="flex items-center justify-center w-[100px]">
        <p className="text-light-element-secondary text-[0.75rem] leading-4 uppercase">
          floor price
        </p>
      </div>
      <div className="flex items-center justify-center w-[100px]">
        <p className="text-light-element-secondary text-[0.75rem] leading-4 uppercase">
          floor change
        </p>
      </div>
    </div>
  );
};
