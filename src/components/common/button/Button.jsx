import RedirectLink from "./RedirectLink.jsx";
import PropTypes from "prop-types";

const styles = {
    medium: {
        height: 36,
        padding: "8px 12px",
        borderRadius: 8,
        fontSize: 14,
        lineHeight: "20px",
    },
    large: {
        height: 44,
        padding: "12px 20px",
        borderRadius: 12,
        fontSize: 14,
        lineHeight: "20px",
    },
    extraLarge: {
        height: 56,
        padding: "16px 24px",
        borderRadius: 12,
        fontSize: 18,
        lineHeight: "24px",
    }
}

const Button = ({color, size, value, onClick, path,  children}) => {
    return (
        <button onClick={onClick} style={styles[size]} className={`${color === "black" ? 'bg-light-element-primary-btn text-white' : 'bg-light-surface-secondary-btn text-light-element-primary'} w-full inline-flex items-center justify-center gap-2 cursor-pointer tablet:w-auto tablet:flex-grow tablet:shrink-0`}>
            {/*Text*/}
            {path ? <RedirectLink path={path} value={value} /> : value }
            {/*Icon */}
            {children}
        </button>
    )
}

Button.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    value: PropTypes.string,
    onClick: PropTypes.func,
    path: PropTypes.string,
    children: PropTypes.any,
}

export default  Button;