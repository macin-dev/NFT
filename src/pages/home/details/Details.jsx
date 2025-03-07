import { Info } from "./index.js";
import FourImagesGrid from "../../../components/common/four-images/FourImagesGrid.jsx";
import ImageItem from "../../../components/common/four-images/ImageItem.jsx";

export const Details = () => {
  return (
    <section className="w-full bg-light-surface-blue">
      <div className="flex w-[23.4375rem] py-10 px-4 gap-10 flex-wrap bg-light-surface-blue tablet:w-[60rem] tablet:h-[20rem] tablet:py-20 tablet:px-10 tablet:flex-nowrap tablet:items-center tablet:content-center desktop:w-[90rem] desktop:p-20 desktop:gap-2.5 mx-auto">
        <Info />
        <div className="w-full tablet:flex tablet:w-[21.875rem] tablet:h-[20rem] tablet:items-center tablet:overflow-y-clip">
            <FourImagesGrid height="h-[24.25rem]">
                <div
                    className="flex flex-col gap-2.5 mt-3.5">
                    <ImageItem url="https://nft-items-vault.s3.us-east-1.amazonaws.com/Ultrarare+assets/homepage/nft-hero-1.jpeg" width="w-[10.625rem]" height="h-[12.3125rem]"/>
                    <ImageItem url="https://nft-items-vault.s3.us-east-1.amazonaws.com/Ultrarare+assets/homepage/nft-hero-4.jpeg" width="w-[10.625rem]" height="h-[10.625rem]"/>
                </div>
                <div className="flex flex-col gap-2.5">
                    <ImageItem url="https://nft-items-vault.s3.us-east-1.amazonaws.com/Ultrarare+assets/homepage/nft-hero-2.jpeg" width="w-[10.625rem]" height="h-[10.625rem]"/>
                    <ImageItem url="https://nft-items-vault.s3.us-east-1.amazonaws.com/Ultrarare+assets/homepage/nft-hero-3.jpeg" width="w-[10.625rem]" height="h-[13rem]"/>
                </div>
            </FourImagesGrid>
        </div>
      </div>
    </section>
  );
};
