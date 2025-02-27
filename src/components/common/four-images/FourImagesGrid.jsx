import { GreenRectangle } from "../../homepage/banner/index.js";
import SquareBorder from "./SquareBorder.jsx";
import ImageItem from "./ImageItem.jsx";

const FourImagesGrid = () => {
  return (
    <section className="flex justify-center gap-1.5 w-full h-[15rem] tablet:w-[46.313rem] tablet:h-[20.5rem] tablet:row-start-1 tablet:col-start-2 tablet:col-end-3 tablet:row-end-3 relative desktop:left-0 desktop:w-[46.313rem] desktop:h-[20.5rem] desktop:self-center">
      <div className="flex flex-col gap-1.5 mt-7 tablet:mt-9 tablet:gap-5">
        <ImageItem url="./assets/home1.jpeg" />
        <ImageItem url="./assets/home4.jpeg" />
      </div>
      <div className="flex flex-col gap-1.5 tablet:gap-5">
        <ImageItem url="./assets/home2.jpeg" />
        <ImageItem url="./assets/home3.jpeg" />
      </div>
      <SquareBorder position="tablet:left-0 tablet:bottom-9" />
      <SquareBorder position="tablet:hidden desktop:top-0 desktop:right-0 desktop:block" />
      <GreenRectangle />
    </section>
  );
};

export default FourImagesGrid;