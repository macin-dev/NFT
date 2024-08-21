export const Tab = () => {
  return (
    <ul className="flex gap-4 border-b border-light-border self-stretch items-start">
      <li className="flex py-3 px-0 items-center gap-1.5 border-b border-light-element-primary text-light-element-primary text-sm font-medium leading-5 tracking-[-0.2px]">
        Ethereum
      </li>
      <li className="flex py-3 px-0 items-center gap-1.5 text-light-element-secondary text-sm leading-5 font-normal tracking-[-0.2px]">
        Solana
      </li>
      <li className="flex py-3 px-0 items-center gap-1.5 text-light-element-secondary text-sm leading-5 font-normal tracking-[-0.2px]">
        Tezos
      </li>
      <li className="flex py-3 px-0 items-center gap-1.5 text-light-element-secondary text-sm leading-5 font-normal tracking-[-0.2px]">
        Polygon
      </li>
    </ul>
  );
};
