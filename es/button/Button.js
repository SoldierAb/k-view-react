import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "type"];
import React from 'react';
import t from 'prop-types';
var prefixCls = 'k';
var types = {
  primary: '#5352ED',
  success: '#2ED573',
  warning: '#FFA502',
  error: '#FF4757'
};

var Button = function Button(_ref) {
  var children = _ref.children,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'primary' : _ref$type,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("button", _extends({
    className: "".concat(prefixCls, "-button-container"),
    style: {
      background: types[type]
    }
  }, rest), children);
};

Button.propTypes = {
  type: t.oneOf(['primary', 'success', 'warning', 'error'])
};
export default Button;