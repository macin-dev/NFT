export const Card = ({ url, userName, text, price }) => {
  return (
    <div className="flex flex-col items-start rounded-2xl border border-light-border bg-white">
      <div className="flex p-2 items-center shrink-0 self-stretch">
        <img className="rounded-xl object-cover" src={url} alt="NFT Avatar" />
      </div>

      <div className="flex flex-col px-3 pb-3 pt-1 gap-2 self-stretch">
        <h3 className="text-light-element-secondary flex gap-1 text-[0.75rem] leading-4">
          <img
            className="w-4 h-4"
            src="./assets/cards/verify.svg"
            alt="Verify Icon"
          />
          {userName}
        </h3>
        <p className="text-light-element-primary text-sm font-medium tracking-default">
          {text}
        </p>
        <p className="text-light-element-primary text-[0.75rem] leading-4 tracking-default">
          {price}
        </p>
      </div>
    </div>
  );
};
