"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Modal;

var _Utilities = _interopRequireDefault(require("./Utilities"));

var _FluentBtn = _interopRequireDefault(require("./FluentBtn"));

var _react = _interopRequireWildcard(require("react"));

var _bootstrap = require("bootstrap");

var _shared = require("./shared");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Simple modal/dialog. Designed to work as an alternative to JavaScript's native `alert()`, `prompt()` and `confirm()` functions.
 * It uses Bootstrap's Modal components.
 *
 * For easy use, you should use the hook `useModal` together with `ModalProvider`. See the example below.
 */
function Modal(_ref) {
  var modalContent = _ref.modalContent,
      unSetModalContent = _ref.unSetModalContent,
      onSubmit = _ref.onSubmit,
      defaultInput = _ref.defaultInput,
      type = _ref.type;
  var modalRef = (0, _react.useRef)();

  var _useState = (0, _react.useState)(defaultInput || ""),
      _useState2 = _slicedToArray(_useState, 2),
      input = _useState2[0],
      setInput = _useState2[1];

  var cancel = function cancel() {
    unSetModalContent();

    if (onSubmit) {
      onSubmit(null);
    }
  };

  var sayNo = function sayNo() {
    unSetModalContent();

    if (onSubmit) {
      onSubmit(false);
    }
  };

  var submit = function submit(e) {
    e.preventDefault();

    if (onSubmit) {
      onSubmit(input || true);
    }
  };

  var btnStyle = {
    maxWidth: "10rem"
  };
  (0, _react.useEffect)(function () {
    setInput(defaultInput || "");
  }, [defaultInput]);
  (0, _react.useEffect)(function () {
    _Utilities.default.registerFluentBtns();
  });
  (0, _react.useEffect)(function () {
    var myModal = modalRef.current;

    var bsModal = _bootstrap.Modal.getInstance(myModal);

    if (!bsModal) {
      bsModal = new _bootstrap.Modal(myModal);
      bsModal.hide(); // When the user clicks on underlay to close the modal

      myModal.addEventListener("hidden.bs.modal", function () {
        cancel();
      });
    } else {
      modalContent !== undefined ? bsModal.show() : bsModal.hide();
    }
  }, [modalContent]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal",
    ref: modalRef,
    tabIndex: -1
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-dialog"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: submit
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/_react.default.createElement("h5", {
    className: "modal-title"
  }, (0, _shared.getPhrase)("Message")), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "btn-close",
    onClick: cancel
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-body"
  }, modalContent, type === "ask" && /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "form-control mt-1",
    value: input,
    onChange: function onChange(_ref2) {
      var target = _ref2.target;
      return setInput(target.value);
    },
    autoFocus: true
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/_react.default.createElement(_FluentBtn.default, {
    type: "submit",
    className: "btn btn-primary d-block w-100",
    style: btnStyle
  }, type === "verify" ? (0, _shared.getPhrase)("Yes") : "OK"), (type === "ask" || type === "verify") && (type === "verify" ? /*#__PURE__*/_react.default.createElement(_FluentBtn.default, {
    className: "btn btn-outline-primary d-block w-100",
    style: btnStyle,
    onClick: sayNo
  }, (0, _shared.getPhrase)("No")) : /*#__PURE__*/_react.default.createElement(_FluentBtn.default, {
    className: "btn btn-outline-primary d-block w-100",
    style: btnStyle,
    onClick: cancel
  }, (0, _shared.getPhrase)("Cancel"))))))));
}