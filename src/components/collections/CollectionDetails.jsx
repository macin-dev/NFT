import CollectionData from "./CollectionData.jsx";

const CollectionDetails = () => {
  return (
    <div className="bg-light-surface-soft flex items-start content-start p-3 gap-2 self-stretch flex-wrap rounded-2xl tablet:w-[37.5rem] tablet:gap-0 tablet:px-6 tablet:py-3">
      <CollectionData title="Floor" value="40" type="ETH" />
        <CollectionData title="Volume" value="832K" type="ETH" />
      <CollectionData title="Items" value="6.5K" />
      <CollectionData title="Owner" value="2.1K" />
      <CollectionData title="Royalties" value="2.5%" />
    </div>
  );
};

export default CollectionDetails;