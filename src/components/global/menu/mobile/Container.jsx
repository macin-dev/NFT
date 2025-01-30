import PropTypes from "prop-types";

const Container = ({ children }) => {
  return <div className="flex items-center gap-6">{children}</div>;
};

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
