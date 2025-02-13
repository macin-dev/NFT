import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const RedirectLink = ({path, value}) => {
  return (
      <Link className="inline-flex items-center justify-center text-[1em]" to={path}>
          {value}
      </Link>
  )
}

RedirectLink.propTypes = {
    path: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
}

export default RedirectLink;