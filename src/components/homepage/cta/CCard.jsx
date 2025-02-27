import Button from "../../common/button/Button.jsx";
import ButtonIcon from "../../common/button/ButtonIcon.jsx";
import TrendingCardExample from "../../common/trending-card-example/TrendingCardExample.jsx";


export const CCard = () => {
  return (
    <div className="flex flex-col py-10 px-6 items-start justify-center gap-8 self-stretch rounded-3xl bg-white shadow-sm tablet:px-10 tablet:content-between tablet:flex-row tablet:gap-x-8 tablet:items-center desktop:p-16 desktop:h-[19.375rem]">
      <div className="flex flex-col gap-10 items-start self-stretch tablet:flex-grow tablet:shrink-0">
        <div className="flex flex-col gap-2 items-start tablet:gap-3 tablet:self-stretch">
          <h5 className="text-[1.5rem] font-semibold leading-5 tracking-[-0.0625rem] text-light-element-primary tablet:text-[2rem] tablet:leading-10 desktop:text-[2.5rem] desktop:leading-[2.75rem] desktop:tracking-[-0.0938rem]">
            Create your own NFT
          </h5>
          <p className="text-[1rem] leading-6 tracking-[-0.0125rem] text-light-element-secondary tablet:text-[1.125rem]">
            Explore new trending NFTs
          </p>
        </div>
        <Button size="large" path="/sing-up" value="Get started" color="black" >
          <ButtonIcon srcIcon="/assets/icons/light-arrow-right.svg" />
        </Button>
      </div>

      <div className="flex items-center tablet:shrink-0 tablet:h-[11.375rem] tablet:justify-end tablet:pt-[1.3125rem] tablet:pr-0 tablet:pb-5 tablet:pl-[5.5625rem] desktop:p-0 desktop:pl-[5.8125rem]">
        <div className="flex flex-col items-center relative w-[18.4375rem] h-[8.8125rem] desktop:w-[29.1875rem] desktop:h-[11.375rem]">
          <TrendingCardExample
            url="./assets/cards/card2.jpeg"
            width="w-[16.0625rem] desktop:w-[27.1875rem]"
            position="top-[3.125rem]"
          />
          <TrendingCardExample
            url="./assets/cards/card1.jpeg"
            width="w-[17.5625rem] desktop:w-[28.4375rem]"
            position="top-[1.5625rem]"
          />
          <TrendingCardExample
            url="./assets/cards/card3.jpeg"
            width="w-[18.4375rem] desktop:w-full"
          />
        </div>
      </div>
    </div>
  );
};
