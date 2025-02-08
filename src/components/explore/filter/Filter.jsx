import PropTypes from "prop-types";
import { usePreventScrolling } from "../../../helper/usePreventScrolling";
import { Header, FilterItemsMenu } from "./";

const Filter = ({ onToggle, toggle }) => {
  usePreventScrolling(toggle);
  return (
    <div className="inline-flex absolute top-0 right-0 bottom-0 left-0 items-end bg-transparent-dark z-30">
      <aside className="w-mobile absolute top-14 right-0 bottom-0 left-0 flex flex-col rounded-tl-2xl mx-auto rounded-tr-2xl bg-white">
        <Header onToggle={onToggle} />
        <FilterItemsMenu />
      </aside>
    </div>
  );
};

Filter.propTypes = {
  onToggle: PropTypes.func,
  toggle: PropTypes.bool,
};

export default Filter;
