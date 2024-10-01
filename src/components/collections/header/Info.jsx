import { InfoItem } from "./InfoItem";

export const Info = () => {
  return (
    <div className="h-12 flex gap-4 tablet:flex-grow">
      <InfoItem title="Floor" value="40" type="ETH" />
      <InfoItem title="Volume" value="832k" type="ETH" />
      <InfoItem title="Items" value="6.5k" type="ETH" />
    </div>
  );
};
