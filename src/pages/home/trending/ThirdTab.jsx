import TabWhite from "../../../components/common/tab/white/TabWhite.jsx";

export const ThirdTab = () => {
  return (
    <div className="flex p-1 items-stat gap-[0.063rem] self-stretch rounded-2xl bg-light-surface-soft">
        <TabWhite size="small">
            <img src="/assets/icons/ethereum.svg" alt="icon ethereum"/>
        </TabWhite>
        <TabWhite size="small">
            <img src="/assets/icons/polygon.svg" alt="icon polygon"/>
        </TabWhite>
        <TabWhite size="small">
            <img src="/assets/icons/tezos.svg" alt="icon tezos"/>
        </TabWhite>
        <TabWhite size="small">
            <img src="/assets/icons/immutable.svg" alt="icon immutable"/>
        </TabWhite>
    </div>
  );
};
