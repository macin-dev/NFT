import PropTypes from "prop-types";
import ToggleBtn from "../../toggle/ToggleBtn";

const TogleMobile = ({ onToggle }) => {
  return (
    <>
      <ToggleBtn
        size="small"
        onToggle={onToggle}
        url="/assets/icons/sliders.svg"
        alt="display a menu of options"
      />
      <ToggleBtn
        size="small"
        url="/assets/icons/filter.svg"
        alt="display menu of options"
      />
    </>
  );
};

TogleMobile.propTypes = {
  onToggle: PropTypes.func,
};

export default TogleMobile;
