import PropTypes from "prop-types";

const ToggleBtn = ({ onToggle, value, url, alt, flex_order }) => {
  const onToggleFun = () => {
    if (!onToggle) return;
    onToggle();
  };
  return (
    <button
      onClick={onToggleFun}
      className={`desktop:${
        flex_order ? flex_order : "order-none"
      } bg-light-surface-soft p-4 text-light-element-primary flex items-center gap-2.5 text-sm text-left tracking-default self-stretch rounded-xl tablet:py-3 tablet:rounded-2xl desktop:py-4 desktop:px-6 `}
    >
      <p className="hidden tablet:text-light-element-primary tablet:block tablet:flex-grow tablet:text-sm tablet:text-left tablet:tracking-default">
        {value}
      </p>
      <div className="flex tablet:bg-light-surface-medium tablet:w-6 tablet:h-6 tablet:p-1 tablet:items-center tablet:justify-center tablet:rounded-lg">
        <img src={url} alt={alt} />
      </div>
    </button>
  );
};

ToggleBtn.propTypes = {
  onToggle: PropTypes.func,
  value: PropTypes.string,
  url: PropTypes.string,
  alt: PropTypes.string,
  flex_order: PropTypes.string,
};

export default ToggleBtn;
