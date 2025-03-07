import { GreenRectangle } from "../../../pages/home/banner/index.js";
import SquareBorder from "./SquareBorder.jsx";
import PropTypes from "prop-types";

const FourImagesGrid = ({ children, height, squareBorder = false }) => {
  return (
    <section className={`${height} flex justify-center gap-1.5 w-full tablet:w-[46.313rem] tablet:row-start-1 tablet:col-start-2 tablet:col-end-3 tablet:row-end-3 relative desktop:left-0 desktop:w-[46.313rem] desktop:self-center`}>
        { children }
        { squareBorder ? <>
            <SquareBorder position="tablet:left-0 tablet:bottom-9" />
            <SquareBorder position="tablet:hidden desktop:top-0 desktop:right-0 desktop:block" />
            <GreenRectangle />
        </> : null }
    </section>
  );
};

FourImagesGrid.propTypes = {
    children: PropTypes.node.isRequired,
    height: PropTypes.string,
    squareBorder: PropTypes.bool,
}

export default FourImagesGrid;