"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BsModal;

var _bootstrap = require("bootstrap");

var _react = _interopRequireWildcard(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Wrapper for Bootstrap's Modal component.
 */
function BsModal(_ref) {
  var className = _ref.className,
      children = _ref.children,
      show = _ref.show,
      setShow = _ref.setShow;
  var modalRef = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    var myModal = modalRef.current;

    var bsModal = _bootstrap.Modal.getInstance(myModal);

    if (!bsModal) {
      bsModal = new _bootstrap.Modal(myModal);
      bsModal.hide();
      setShow(false); // When the user clicks on underlay to close the modal

      myModal.addEventListener("hide.bs.modal", function () {
        setShow(false);
      });
    } else {
      show ? bsModal.show() : bsModal.hide();
    }
  }, [show]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)("modal fade", className),
    ref: modalRef,
    tabIndex: -1
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-dialog"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content"
  }, children)));
}