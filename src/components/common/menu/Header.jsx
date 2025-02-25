import PropTypes from "prop-types";
import Navbar from "./Navbar.jsx";

const Header = ({ children }) => {
    return <header>
        <Navbar>
            {children}
        </Navbar>
    </header>
}

Header.propTypes = {
    children: PropTypes.any,
}

export default Header;