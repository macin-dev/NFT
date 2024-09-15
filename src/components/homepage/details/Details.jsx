import { Info, Group } from ".";

export const Details = () => {
  return (
    <section className="w-full bg-light-surface-blue">
      <div className="flex w-[23.4375rem] py-10 px-4 gap-10 flex-wrap bg-light-surface-blue tablet:w-[60rem] tablet:h-[20rem] tablet:py-20 tablet:px-10 tablet:flex-nowrap tablet:items-center tablet:content-center desktop:w-[90rem] desktop:p-20 desktop:gap-2.5 mx-auto">
        <Info />

        <div className="tablet:flex tablet:w-[21.875rem] tablet:h-[20rem] tablet:items-center tablet:overflow-hidden tablet:shrink-0">
          <Group />
        </div>
      </div>
    </section>
  );
};
