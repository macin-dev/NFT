import { Tab_md } from "../../global/tab";

export const Tab = () => {
  return (
    <nav className="flex p-1 gap-[0.0625rem] self-stretch rounded-2xl bg-light-surface-soft">
      <Tab_md path="art" value="Explore" />
      <Tab_md path="collections" value="Collections" />
      <Tab_md path="users" value="Users" />
    </nav>
  );
};
