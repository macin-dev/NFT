import PropTypes from "prop-types";

const MediumSearch = ({ children }) => {
    return (
        <div className="w-0 h-0 hidden desktop:block desktop:w-auto desktop:h-auto">
            {children}
        </div>
    )
}

MediumSearch.propTypes = {
    children: PropTypes.node.isRequired,
}

export default MediumSearch;