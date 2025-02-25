import PropTypes from "prop-types";

const ToggleIcon = ({ value, url, alt }) => {
  return (
    <>
      <p className="text-light-element-primary flex-grow text-sm text-left tracking-default">
        {value}
      </p>
      <div className="bg-light-surface-medium flex w-6 h-6 p-1 items-center justify-center rounded-lg">
        <img src={url} alt={alt} />
      </div>
    </>
  );
};

ToggleIcon.propTypes = {
  value: PropTypes.string,
  url: PropTypes.string,
  alt: PropTypes.string,
};

export default ToggleIcon;
