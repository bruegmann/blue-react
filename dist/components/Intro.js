"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Intro;

var _react = _interopRequireWildcard(require("react"));

var _Utilities = _interopRequireDefault(require("./Utilities"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Can be used for a sign-in page.
 */
function Intro(_ref) {
  var logo = _ref.logo,
      _ref$logoMaxWidth = _ref.logoMaxWidth,
      logoMaxWidth = _ref$logoMaxWidth === void 0 ? "100px" : _ref$logoMaxWidth,
      title = _ref.title,
      children = _ref.children;
  (0, _react.useEffect)(function () {
    _Utilities.default.registerFluentBtns();
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "sign-in-screen"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sign-in-container mx-1"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "jumbotron shadow-lg"
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