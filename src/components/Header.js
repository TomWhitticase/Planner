import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <header className="w-full bg-white shadow-lg p-4">
      <h1 className="text-2xl">{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "My Meetings",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
