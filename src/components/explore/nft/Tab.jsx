import TabWhite from "../../tab/white/TabWhite";

const tab_options = [
  { id: Math.random(), path: "art", value: "Explore" },
  { id: Math.random(), path: "collections", value: "Collections" },
  { id: Math.random(), path: "users", value: "Users" },
];

export const Tab = () => {
  return (
    <nav className="flex p-1 gap-[0.0625rem] self-stretch rounded-2xl bg-light-surface-soft">
      {tab_options.map((tab) => (
        <TabWhite key={tab.id} path={tab.path} value={tab.value} />
      ))}
    </nav>
  );
};
