import TabWhite from "../../../components/common/tab/white/TabWhite.jsx";

export const SecondTab = () => {
  return (
    <div className="flex p-1 items-start gap-[0.063rem] self-stretch rounded-2xl bg-light-surface-soft">
        <TabWhite size="small" value="1H" fontSize={14} />
        <TabWhite size="small" value="1D" fontSize={14} />
        <TabWhite size="small" value="7H" fontSize={14} />
        <TabWhite size="small" value="30D" fontSize={14} />
    </div>
  );
};
