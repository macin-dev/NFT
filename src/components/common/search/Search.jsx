import PropTypes from "prop-types";
import SearchInput from "./SearchInput.jsx";

const sizeSearch = {
    small: {
        width: 48,
        padding: 14,
        height: 48,
    },
    medium:{
        width: 426,
        paddingLeft: 16,
    },
    fit: {
        flexGrow: 1,
        alignSelf: "stretch",
        flexShrink: 0,
        flexBasis: 0,
        paddingLeft: 16,
    }
}

const Search = ({ size, placeholder, children }) => {
    return (
        <label id="search-id" style={sizeSearch[size]} className="flex text-[1rem] items-center justify-between p-3.5 rounded-xl bg-light-surface-soft">
            <SearchInput placeholder={placeholder} size={size} />
            { children }
        </label>
    );
};

export default Search;

Search.propTypes = {
    size: PropTypes.string,
    placeholder: PropTypes.string,
    children: PropTypes.node,
};
