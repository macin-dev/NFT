import PropTypes from "prop-types";

const sizes = {
  small: {
    display: "none",
    width: 0,
    height: 0,
  },
  medium: {
    width: "100%",
  },
  fit: {
    width: "100%",
  }
}

const SearchInput = ({ placeholder, size}) => {
  return (
    <input
        style={sizes[size]}
      className="text-[1rem] tracking-default outline-none text-light-element-secondary bg-transparent"
      type="email"
      placeholder={placeholder}
    />
  );
};

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  size: PropTypes.string,
}

export default SearchInput;