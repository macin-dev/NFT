import { Number, Paragraph } from ".";

export const Info = () => {
  return (
    <div className="flex flex-col items-start gap-6 flex-grow tablet:gap-12 desktop:gap-12 desktop:shrink-0">
      <h4 className="text-[1.5rem] font-semibold leading-7 tracking-[-0.0625rem] text-light-element-primary tablet:text-[2rem] tablet:leading-10 desktop:text-[2.5rem] desktop:leading-[2.75rem] desktop:tracking-[-0.0938rem]">
        NFT marketplace for curated crypto art.
      </h4>

      <div className="flex flex-col gap-6 self-stretch desktop:flex-row">
        <div className="flex self-stretch desktop:gap-6">
          <div className="flex flex-col items-start gap-1 flex-grow desktop:w-[11.25rem]">
            <Number value="40,000" />
            <Paragraph text=" Artworks collected" />
          </div>
          <div className="flex flex-col items-start gap-1 flex-grow desktop:w-[11.25rem]">
            <Number value="$520m" />
            <Paragraph text="Earned by Artists" />
          </div>
        </div>

        <div className="flex self-stretch desktop:gap-6">
          <div className="flex flex-col items-start gap-1 flex-grow desktop:w-[11.25rem]">
            <Number value="$14m" />
            <Paragraph text="In Artist Royalties" />
          </div>
          <div className="flex flex-col items-start gap-1 flex-grow desktop:w-[11.25rem]">
            <Number value="$800m" />
            <Paragraph text="NFT Art Market Cap" />
          </div>
        </div>
      </div>
    </div>
  );
};
