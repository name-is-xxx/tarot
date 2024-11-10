import PropTypes from "prop-types";
import "./index.css";

const Button = ({ children, onClick, className, type, disabled }) => {
  return (
    <button
      className={`button ${type} ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  type: "button",
  disabled: false,
  className: "",
};

export default Button;
