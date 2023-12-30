// import PropTypes from 'prop-types';
import './Button.css';

const Button = (props) => {
  const { width, inerText, color, bgColor, posAbs, border, borderRadius, margin, onClick } = props;
  return (<div className="btn"
    style={{
      width: `${width}`,
      color: `${color}`,
      backgroundColor: `${bgColor}`,
      border: `${border}`,
      borderRadius: `${borderRadius}`,
      position: `${posAbs}`,
      margin: `${margin}`,
    }}
    onClick={onClick}>{inerText}</div>);
};

// Button.propTypes = {
//   bool: PropTypes.bool.isRequired
// };

export default Button;
