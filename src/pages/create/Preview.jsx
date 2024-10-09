import { PreviewCard } from "../../components/global/nftcard";

export const Preview = () => {
  return (
    <div className="tablet:w-[17rem] flex flex-col items-start gap-4 desktop:w-[18.5rem]">
      <p className="text-light-element-primary text-[1rem] leading-6 font-semibold tracking-default">
        Preview
      </p>
      {/* <Card
        url="/assets/home2.jpeg"
        userName="Winter Madagascar"
        text="Clown Ape"
        price="0.005 ETH"
        xTabletWidth="270px"
        yTabletHeight="320px"
        yImageHeight="236px"
        gap12={false}
      /> */}

      <PreviewCard
        url="/assets/home2.jpeg"
        userName="Winter Madagascar"
        text="Clown Ape"
        price="0.005 ETH"
      />
    </div>
  );
};
