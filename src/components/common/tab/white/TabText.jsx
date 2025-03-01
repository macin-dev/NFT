import PropTypes from "prop-types";

const TabText = ({fontSize, value}) => {
    return <p style={{fontSize: fontSize}} className="text-light-element-primary font-medium tracking-default">
        {value}
    </p>
}

TabText.propTypes = {
    fontSize: PropTypes.number,
    value: PropTypes.string,
}

export default TabText;