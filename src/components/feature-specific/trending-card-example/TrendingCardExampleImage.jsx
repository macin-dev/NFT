import PropTypes from "prop-types";

const TrendingCardExampleImage = ({ url }) => {
  return (
    <div className="flex h-[5.8125rem] p-2 flex-col items-center desktop:h-[8.375rem]">
      <img
        className="w-[5.1875rem] h-[4.8125rem] shrink-0 rounded-xl desktop:w-[7.875rem] desktop:h-[7.375rem]"
        src={url}
        alt="Avatar"
      />
    </div>
  );
};

TrendingCardExampleImage.propTypes = {
    url: PropTypes.string.isRequired
}

export default TrendingCardExampleImage;