"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Intro;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Can be used for a sign-in page.
 */
function Intro(_ref) {
  var logo = _ref.logo,
      _ref$logoMaxWidth = _ref.logoMaxWidth,
      logoMaxWidth = _ref$logoMaxWidth === void 0 ? "100px" : _ref$logoMaxWidth,
      title = _ref.title,
      children = _ref.children;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "sign-in-screen"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sign-in-container mx-1"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-body rounded-3 shadow-lg px-4 py-5"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: logoMaxWidth
    },
    src: logo,
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("h2", {
    className: "mt-4 mb-3"
  }, title)), children)));
}