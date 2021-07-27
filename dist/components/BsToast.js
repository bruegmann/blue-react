"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BsToast;

var _bootstrap = require("bootstrap");

var _react = _interopRequireWildcard(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Wrapper for Bootstrap's Toast component.
 */
function BsToast(_ref) {
  var className = _ref.className,
      children = _ref.children,
      show = _ref.show,
      setShow = _ref.setShow,
      _ref$zIndex = _ref.zIndex,
      zIndex = _ref$zIndex === void 0 ? 11 : _ref$zIndex;
  var toastRef = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    var myToast = toastRef.current;

    var bsToast = _bootstrap.Toast.getInstance(myToast);

    if (!bsToast) {
      bsToast = new _bootstrap.Toast(myToast, {
        autohide: false
      });
      bsToast.hide();
      setShow(false);
    } else {
      show ? bsToast.show() : bsToast.hide();
    }
  }, [show]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)("position-fixed bottom-0 end-0 p-3", className),
    style: {
      zIndex: zIndex
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "toast",
    role: "alert",
    ref: toastRef
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "toast-header"
  }, /*#__PURE__*/_react.default.createElement("strong", {
    className: "me-auto"
  }, "Bootstrap 5"), /*#__PURE__*/_react.default.createElement("small", null, "4 mins ago"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "btn-close",
    onClick: function onClick() {
      return setShow(false);
    },
    "aria-label": "Close"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "toast-body"
  }, "Hello, world! This is a toast message.")));
}