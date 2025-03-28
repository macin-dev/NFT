import PropTypes from "prop-types";
import RedirectLink from "./RedirectLink.jsx";

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
    },
}

const Button = ({customSize, color, size, value, onClick, path,  children, disabled = false}) => {
    return (
        <button onClick={onClick} style={customSize ? customSize : styles[size]} disabled={disabled} className={`${disabled ? "opacity-45" : false } ${color === "black" ? 'bg-light-element-primary-btn text-white' : 'bg-light-surface-secondary-btn text-light-element-primary'} inline-flex items-center justify-center gap-2 cursor-pointer tracking-default max-[960px]:w-full`}>
            {/*Text*/}
            {path ? <RedirectLink path={path} value={value} /> : value }
            {/*Icon */}
            {children}
        </button>
    )
}

Button.propTypes = {
    customSize: PropTypes.object,
    color: PropTypes.string.isRequired,
    size: PropTypes.string,
    value: PropTypes.string,
    onClick: PropTypes.func,
    path: PropTypes.string,
    children: PropTypes.any,
    disabled: PropTypes.bool,
}

export default  Button;