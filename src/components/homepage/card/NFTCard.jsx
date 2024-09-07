import { CardImage } from "./";

export const NFTCard = (props) => {
  const { profile, title, price, url } = props;
  return (
    <div className="bg-white flex flex-col w-[16.875rem] h-[24rem] items-start rounded-2xl gap-3 select-none tablet:w-[20.313rem] tablet:border-[0.7px] tablet:border-light-border tablet:gap-0">
      <CardImage url={url} />

      <div className="flex pt-1 px-4 pb-3 flex-col items-start gap-3 self-stretch">
        <h3 className="flex items-center gap-1 text-light-element-secondary text-[0.75rem] leading-4">
          <img src="./assets/cards/verify.svg" alt="Verify Icon" />
          {profile}
        </h3>
        <p className="text-light-element-primary text-sm font-medium leading-6 tracking-[-0.012rem]">
          {title}
        </p>
        <p className="text-light-element-primary text-sm leading-5 tracking-[-0.012rem]">
          {price}
        </p>
      </div>
    </div>
  );
};
