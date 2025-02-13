import PropTypes from "prop-types";

const ButtonIcon = ({srcIcon}) => {
    return <img src={srcIcon} alt="Arrow Icon"/>
}

ButtonIcon.propTypes = {
    srcIcon: PropTypes.string,
}
export default ButtonIcon;