import PropTypes from "prop-types";

const ButtonIcon = ({srcIcon}, alt) => {
    return <img src={srcIcon} alt={alt}/>
}

ButtonIcon.propTypes = {
    srcIcon: PropTypes.string,
    alt: PropTypes.string,
}
export default ButtonIcon;