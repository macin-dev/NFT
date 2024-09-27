import { Tab_active_md, Tab_unactive_md } from "../../global/tab";

export const Tab = ({ tabs, onTabs }) => {
  console.log(tabs);
  return (
    <div className="flex p-1 gap-[0.0625rem] self-stretch rounded-2xl bg-light-surface-soft">
      {tabs["tab1"] ? (
        <Tab_active_md active="NFTs" value="tab1" onTabs={onTabs} />
      ) : (
        <Tab_unactive_md unactive="NFTS" value="tab1" onTabs={onTabs} />
      )}

      {tabs["tab2"] ? (
        <Tab_active_md active="Collection" value="tab2" onTabs={onTabs} />
      ) : (
        <Tab_unactive_md unactive="Collection" value="tab2" onTabs={onTabs} />
      )}

      {tabs["tab3"] ? (
        <Tab_active_md active="Users" value="tab3" onTabs={onTabs} />
      ) : (
        <Tab_unactive_md unactive="Users" value="tab3" onTabs={onTabs} />
      )}
    </div>
  );
};
