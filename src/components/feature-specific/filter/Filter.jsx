import PropTypes from "prop-types";
import { Header, FilterItemsMenu } from "./index.js";

const Filter = ({ onToggle, documentSize }) => {
  return (
    <div className="[@media(max-width:959px)]:inline-flex [@media(max-width:959px)]:absolute [@media(max-width:959px)]:top-0 [@media(max-width:959px)]:right-0 [@media(max-width:959px)]:bottom-0 [@media(max-width:959px)]:left-0 [@media(max-width:959px)]:items-end [@media(max-width:959px)]:bg-black/30 [@media(max-width:959px)]:z-30">
      <aside className="[@media(max-width:959px)]:w-mobile [@media(max-width:959px)]:absolute [@media(max-width:959px)]:top-14 [@media(max-width:959px)]:right-0 [@media(max-width:959px)]:bottom-0 [@media(max-width:959px)]:left-0 [@media(max-width:959px)]:flex [@media(max-width:959px)]:flex-col [@media(max-width:959px)]:rounded-tl-2xl [@media(max-width:959px)]:mx-auto [@media(max-width:959px)]:rounded-tr-2xl bg-white">
          {documentSize === "mobile" ? <Header onToggle={onToggle} /> : null }
        <FilterItemsMenu />
      </aside>
     </div>
  );
};

Filter.propTypes = {
  onToggle: PropTypes.func,
  documentSize: PropTypes.string,
};

export default Filter;
