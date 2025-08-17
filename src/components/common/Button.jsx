import React from "react";
import PropTypes from "prop-types";

function Button({
  label,
  onClick = () => {},   
  className = "",
  icon = null,
  ariaLabel = null,
}) {
  return (
    <button
      onClick={onClick}
      className={className}
      aria-label={ariaLabel || label}
    >
      {icon && <i className={`fa-solid ${icon}`} aria-hidden="true"></i>}
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  icon: PropTypes.string,
  ariaLabel: PropTypes.string,
};

export default Button;
