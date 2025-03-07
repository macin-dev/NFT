import PropTypes from "prop-types";

const Navbar = ({ children }) => {
  return (
    <nav className="w-full py-3 px-4 flex justify-between items-center tablet:w-[60rem] tablet:py-5 tablet:px-10 desktop:px-20 desktop:w-[90rem] mx-auto">
      {children}
    </nav>
  );
};

Navbar.propTypes = {
  children: PropTypes.any,
};

export default Navbar;
