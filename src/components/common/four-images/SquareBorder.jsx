import PropTypes from "prop-types";

const SquareBorder = ({ position }) => {
  return (
    <div
      className={`hidden tablet:w-[141px] tablet:h-[141px] tablet:rounded-2xl tablet:border tablet:border-light-surface-stroke tablet:block tablet:absolute ${position}`}
    ></div>
  );
};

SquareBorder.propTypes = {
  position: PropTypes.string,
}

export default SquareBorder;
