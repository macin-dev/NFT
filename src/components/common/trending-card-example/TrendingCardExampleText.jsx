import PropTypes from "prop-types";

const TrendingCardExampleText = ({ text }) => {
  return (
    <div className="flex flex-col items-start gap-1 flex-grow flex-shrink-0">
      <p className="text-[0.75rem] leading-[1.125rem] text-light-element-secondary">
        {text}
      </p>
      <div className="w-[3.125rem] h-4 rounded-[1.3125rem] bg-light-surface-medium desktop:w-[5.9375rem]"></div>
    </div>
  );
};

TrendingCardExampleText.propTypes = {
    text: PropTypes.string,
}

export default TrendingCardExampleText;