const CollectionAuthor = () => {
  return (
    <section className="inline-flex items-center gap-3">
      <div className="flex w-12 h-12 items-center justify-center">
        <img
          className="w-full h-full rounded-xl"
          src="https://nft-items-vault.s3.us-east-1.amazonaws.com/Ultrarare+assets/cards/profile.jpeg"
          alt="NFT user avatar"
        />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <h3 className="text-light-element-primary text-[1rem] leading-6 font-semibold tracking-default">
            Extraordinary Ape
          </h3>
          <img src="/assets/icons/verify.svg" alt="Verify Icon" />
        </div>
        <div className="flex items-start gap-1">
          <p className="text-light-element-secondary text-sm leading-5 tracking-default">
            40
          </p>
          <p className="text-light-element-secondary text-sm leading-5 tracking-default">
            ETH
          </p>
        </div>
      </div>
    </section>
  );
};


export default CollectionAuthor;