import { ButtonContainer, RedRectangle, Title } from ".";
import FourImagesGrid from "../../common/four-images/FourImagesGrid.jsx";
import ImageItem from "../../common/four-images/ImageItem.jsx";

export const Banner = () => {
  return (
    <section className="relative tablet:h-[440px] desktop:h-[550px] flex justify-center ">
      <div className="flex flex-col justify-center items-start gap-14 py-[3.75rem] px-4 w-mobile tablet:relative tablet:grid tablet:w-[60rem] target:grid-cols-2 tablet:justify-between tablet:gap-y-12 tablet:gap-x-10 tablet:pl-10 tablet:overflow-visible desktop:w-[90rem] desktop:pl-20 desktop:gap-x-12 desktop:h-[34.375rem]">
        <Title />
        <ButtonContainer />
          <FourImagesGrid height="h-[15rem] tablet:h-[20.5rem]" squareBorder={true}>
              <div className="flex flex-col gap-1.5 mt-7 tablet:mt-9 tablet:gap-2.5">
                  <ImageItem url="https://nft-items-vault.s3.us-east-1.amazonaws.com/Ultrarare+assets/homepage/nft-hero-1.jpeg" width="w-[6.438rem] tablet:w-[8.863rem]" height="h-[6.438rem] tablet:h-[8.863rem]"/>
                  <ImageItem url="https://nft-items-vault.s3.us-east-1.amazonaws.com/Ultrarare+assets/homepage/nft-hero-4.jpeg" width="w-[6.438rem] tablet:w-[8.863rem]" height="h-[6.438rem] tablet:h-[8.863rem]"/>
              </div>
              <div className="flex flex-col gap-1.5 tablet:gap-2.5">
                  <ImageItem url="https://nft-items-vault.s3.us-east-1.amazonaws.com/Ultrarare+assets/homepage/nft-hero-2.jpeg" width="w-[6.438rem] tablet:w-[8.863rem]" height="h-[6.438rem] tablet:h-[8.863rem]"/>
                  <ImageItem url="https://nft-items-vault.s3.us-east-1.amazonaws.com/Ultrarare+assets/homepage/nft-hero-3.jpeg" width="w-[6.438rem] tablet:w-[8.863rem]" height="h-[6.438rem] tablet:h-[8.863rem]"/>
              </div>
          </FourImagesGrid>
          <RedRectangle/>
      </div>
    </section>
  );
};
