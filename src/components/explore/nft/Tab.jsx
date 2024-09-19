import { Tab_active_md, Tab_unactive_md } from "../../global/tab";

export const Tab = () => {
  return (
    <div className="flex p-1 gap-[0.0625rem] self-stretch rounded-2xl bg-light-surface-soft">
      <Tab_active_md active="NFTs" />
      <Tab_unactive_md unactive="Collection" />
      <Tab_unactive_md unactive="Users" />
    </div>
  );
};
