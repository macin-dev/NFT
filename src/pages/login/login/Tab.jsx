import { TabItem } from "./TabItem.jsx";

export const Tab = () => {
  return (
    <ul className="flex gap-4 border-b border-light-border self-stretch items-start">
      <li className="flex py-3 px-0 items-center gap-1.5 border-b border-light-element-primary text-light-element-primary text-sm font-medium leading-5 tracking-[-0.013rem]">
        Ethereum
      </li>
      <TabItem item="Solana" />
      <TabItem item="Tezos" />
      <TabItem item="Polygon" />
    </ul>
  );
};
