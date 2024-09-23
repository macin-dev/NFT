import { Group_1, Group_2 } from "./";

export const Data = () => {
  return (
    <div className="bg-light-surface-soft flex items-start content-start p-3 gap-2 self-stretch flex-wrap rounded-2xl tablet:w-[37.5rem] tablet:gap-0 tablet:px-6 tablet:py-3">
      <Group_1 title="Floor" value="40" type="ETH" />
      <Group_1 title="Volume" value="832K" type="ETH" />
      <Group_2 title="Items" value="6.5K" />
      <Group_2 title="Owner" value="2.1K" />
      <Group_2 title="Royalties" value="2.5%" />
    </div>
  );
};
