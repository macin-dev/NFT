export const ColName = () => {
  return (
    <div className="flex justify-between items-start self-stretch tablet:order-first">
      <div className="flex flex-col items-start gap-1">
        <div className="flex gap-2">
          <h2 className="text-light-element-primary text-[1.5rem] font-semibold leading-7 tracking-[-0.0625rem] tablet:text-[2rem] tablet:leading-10">
            Space Explorer
          </h2>
          <img
            className="w-6 h-6"
            src="./assets/icons/verify.svg"
            alt="Verify Icon"
          />
        </div>

        <div className="flex gap-2">
          <p className="text-light-element-secondary text-sm tracking-default tablet:text-[1rem] tablet:leading-6">
            Created by
          </p>
          <p className="text-light-element-primary text-sm font-semibold tracking-default tablet:text-[1rem] tablet:leading-6">
            Jack Krauser
          </p>
        </div>
      </div>

      <div className="bg-light-surface-secondary-btn flex items-center justify-center p-2 rounded-[0.625rem]">
        <img
          className="w-4 h-4"
          src="./assets/icons/more-vertical.svg"
          alt="Icon"
        />
      </div>
    </div>
  );
};
