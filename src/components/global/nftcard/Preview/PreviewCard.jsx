import { DefaultPreview } from "./DefaultPreview";
import { RenderImage } from "./RenderImage";

export const PreviewCard = ({ userName, text, price, fileURL }) => {
  return (
    <div className="tablet:w-[270px] tablet:h-[320px] flex flex-col items-start rounded-2xl border-[0.7px] border-light-border bg-white desktop:w-[296px]">
      <div className="tablet:h-[236px] desktop:h-[236px] flex p-2 self-stretch relative">
        {fileURL ? <RenderImage fileURL={fileURL} /> : <DefaultPreview />}
      </div>

      <div className="flex flex-col px-3 pb-3 pt-1 gap-2 self-stretch tablet:px-4 tablet:flex-grow desktop:gap-2 desktop:px-3">
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
          {price && price + " ETH"}
        </p>
      </div>
    </div>
  );
};
