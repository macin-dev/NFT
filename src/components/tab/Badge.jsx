import PropTypes from "prop-types";

const Badge = ({ value }) => {
  return (
    <span className="bg-light-surface-soft py-0.5 px-2.5 rounded-2xl text-light-element-secondary text-[12px] leading-4 tracking-default">
      {value}
    </span>
  );
};

Badge.propTypes = {
  value: PropTypes.number,
};

export default Badge;
