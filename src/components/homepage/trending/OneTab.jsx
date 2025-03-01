import TabWhite from "../../common/tab/white/TabWhite.jsx";

export const OneTab = () => {
  return (
    <div className="flex p-1 items-start gap-[0.063rem] self-stretch rounded-2xl bg-light-surface-soft tablet:w-auto tablet:self-start">
        <TabWhite value="Trending" size="small" fontSize={14} />
        <TabWhite value="Top collections" size="small" fontSize={14}  />
    </div>
  );
};
