"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Status;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Status(_ref) {
  var successIcon = _ref.successIcon,
      _ref$success = _ref.success,
      success = _ref$success === void 0 ? false : _ref$success;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)("blue-status-circle blue-status-success", {
      "d-flex": success
    })
  }, successIcon || "✔"));
}