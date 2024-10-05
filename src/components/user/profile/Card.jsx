export default function Card({ url, title, name, price }) {
  return (
    <div className="flex flex-col items-start rounded-2xl border-[0.7px] border-light-border bg-white">
      <div className="flex p-2 self-stretch w-[10.375rem] h-[11rem] tablet:w-full tablet:h-[11.25rem] desktop:h-[14.75rem]">
        <img
          className="rounded-xl object-cover h-full w-full"
          src={url}
          alt="NFT Avatar"
        />
      </div>

      <div className="flex flex-col px-3 pb-3 pt-1 gap-2 self-stretch tablet:px-4 tablet:flex-grow tablet:gap-3 desktop:gap-2 desktop:px-3">
        <h3 className="text-light-element-secondary flex gap-1 text-[0.75rem] leading-4">
          <img
            className="w-4 h-4"
            src="/assets/cards/verify.svg"
            alt="Verify Icon"
          />
          {title}
        </h3>
        <p className="text-light-element-primary text-sm font-medium tracking-default tablet:text-[1rem] tablet:leading-6">
          {name}
        </p>
        <p className="text-light-element-primary text-[0.75rem] leading-4 tracking-default">
          {price}
        </p>
      </div>
    </div>
  );
}
