import React from 'react'
import PropTypes from 'prop-types'

/**
  This is a single component to handle all header instances. The default is an H1, bold, $NileBlue. So you only need to specify `as` if the header IS NOT an H1 (font-size: 18px), `light` if the color IS $FiordBlue, `semibold` if the font-weight IS 600, and/or `regular` if the font-weight IS normal.
 */

const Header = ({
  children,
  className,
  light,
  semibold,
  regular,
  as
}) => {
  const TagName = as

  return (
    <TagName
      className={className}
    >
      {children}
    </TagName>
  )
}

Header.defaultProps = {
  as: 'h1',
  light: false,
  semibold: false,
  regular: false
}

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element
  ]).isRequired,
  as: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6'
  ]),
  className: PropTypes.string,
  light: PropTypes.bool,
  semibold: PropTypes.bool,
  regular: PropTypes.bool
}

export default Header
