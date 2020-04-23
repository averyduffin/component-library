'use strict';



function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

/**
  This is a single component to handle all header instances. The default is an H1, bold, $NileBlue. So you only need to specify `as` if the header IS NOT an H1 (font-size: 18px), `light` if the color IS $FiordBlue, `semibold` if the font-weight IS 600, and/or `regular` if the font-weight IS normal.
 */
var Header = function Header(_ref) {
  var children = _ref.children,
      className = _ref.className,
      light = _ref.light,
      semibold = _ref.semibold,
      regular = _ref.regular,
      as = _ref.as;
  var TagName = as;
  return /*#__PURE__*/React.createElement(TagName, {
    className: className
  }, children);
};

Header.defaultProps = {
  as: 'h1',
  light: false,
  semibold: false,
  regular: false
};

exports.Header = Header;
//# sourceMappingURL=index.js.map
