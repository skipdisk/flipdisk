import React from 'react'
import PropTypes from 'prop-types'
import './drawer.css'

const Drawer = ({ onClick, disabled, className, text }) => {
  return (
    <button
      type='button'
      className={`button ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}{' '}
    </button>
  )
}

Drawer.propTypes = {
  onClick: PropTypes.func,
  /** Disable the button */
  disabled: PropTypes.bool,
  className: PropTypes.string,
  /** Text of the button */
  text: PropTypes.string
}

Drawer.defaultProps = {
  onClick: () => {},
  disabled: false,
  className: null,
  text: 'Click Me'
}

export default Drawer
