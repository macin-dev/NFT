import TabWhite from "../../common/tab/white/TabWhite";

const tab_options = [
  { id: Math.random(), path: "art", value: "NFTs" },
  { id: Math.random(), path: "collections", value: "Collections" },
  { id: Math.random(), path: "users", value: "Users" },
];

const Tab = () => {
  return (
    <nav className="w-full flex p-1 gap-[0.0625rem] self-stretch rounded-2xl bg-light-surface-soft desktop:w-auto">
      {tab_options.map((tab) => (
        <TabWhite size="medium" fontSize={14} key={tab.id} path={tab.path} value={tab.value} />
      ))}
    </nav>
  );
};

export default Tab;
