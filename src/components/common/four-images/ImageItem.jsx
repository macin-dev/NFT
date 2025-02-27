import PropTypes from "prop-types";

const ImageItem = ({ url }) => {
  return (
    <div className="w-[6.438rem] h-[6.438rem] rounded-2xl tablet:w-[8.863rem] tablet:h-[8.063rem]">
      <img className="rounded-2xl" src={url} alt="Image of Hero" />
    </div>
  );
};

ImageItem.propTypes = {
    url: PropTypes.string,
}

export default ImageItem;
