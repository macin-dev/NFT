import ToggleBtn from "../../toggle/ToggleBtn";

const ToggleTablet = () => {
  return (
    <>
      <ToggleBtn
        size="medium"
        value="Filters"
        url="/assets/icons/sliders.svg"
        alt="display a menu of options"
      />
      <ToggleBtn
        size="medium"
        value="Trending"
        url="/assets/icons/chevron-down.svg"
        alt="display a menu of options"
      />
    </>
  );
};

export default ToggleTablet;
