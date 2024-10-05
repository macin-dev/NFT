export const Owner = () => {
  return (
    <div className="flex flex-col items-start gap-2">
      <div className="flex items-center gap-1">
        <img
          className="w-4 h-4"
          src="/assets/icons/verify.svg"
          alt="Verify Icon"
        />
        <p className="text-light-element-secondary text-sm tracking-default">
          Winter Madagascar
        </p>
      </div>

      <h4 className="text-light-element-primary text-[1.5rem] leading-7 font-semibold tablet:text-[2rem] tablet:leading-10">
        Whistle Ape
      </h4>

      <div className="flex gap-2 items-center">
        <p className="text-light-element-secondary text-sm tracking-default tablet:text-[1rem] tablet:leading-6">
          Owned by
        </p>
        <p className="text-light-element-primary-btn tracking-default underline tablet:text-[1rem] tablet:leading-6">
          HN98333
        </p>
      </div>
    </div>
  );
};
