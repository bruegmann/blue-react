"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useModal = exports.ModalProvider = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Modal = _interopRequireDefault(require("./Modal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ModalContext = /*#__PURE__*/(0, _react.createContext)({
  ask: undefined,
  tell: undefined,
  verify: undefined
});

var ModalProvider = function ModalProvider(props) {
  var _useState = (0, _react.useState)("tell"),
      _useState2 = _slicedToArray(_useState, 2),
      type = _useState2[0],
      setType = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      modalContent = _useState4[0],
      setModalContent = _useState4[1];

  var _useState5 = (0, _react.useState)(),
      _useState6 = _slicedToArray(_useState5, 2),
      defaultInput = _useState6[0],
      setDefaultInput = _useState6[1];

  var _useState7 = (0, _react.useState)(),
      _useState8 = _slicedToArray(_useState7, 2),
      inputType = _useState8[0],
      setInputType = _useState8[1];

  var unSetModalContent = (0, _react.useCallback)(function () {
    setModalContent(undefined);
  }, [setModalContent]);

  var _useState9 = (0, _react.useState)(),
      _useState10 = _slicedToArray(_useState9, 2),
      onSubmit = _useState10[0],
      setOnSubmit = _useState10[1];

  var ask = function ask(text, options) {
    return new Promise(function (resolve) {
      setType("ask");
      setModalContent(text);

      if (options) {
        var _inputType = options.inputType;
        setInputType(_inputType);
      }

      setDefaultInput("");
      setOnSubmit(function () {
        return function (input) {
          resolve(input);
          setModalContent(undefined);
          setDefaultInput(undefined);
        };
      });
    });
  };

  var tell = function tell(text) {
    return new Promise(function (resolve) {
      setType("tell");
      setModalContent(text);
      setOnSubmit(function () {
        return function (input) {
          resolve(input ? true : false);
          setModalContent(undefined);
        };
      });
    });
  };

  var verify = function verify(text) {
    return new Promise(function (resolve) {
      setType("verify");
      setModalContent(text);
      setOnSubmit(function () {
        return function (input) {
          resolve(input ? true : false);
          setModalContent(undefined);
        };
      });
    });
  };

  return /*#__PURE__*/_react.default.createElement(ModalContext.Provider, _extends({
    value: {
      ask: ask,
      tell: tell,
      verify: verify
    }
  }, props), props.children, /*#__PURE__*/_react.default.createElement(_Modal.default, {
    modalContent: modalContent,
    unSetModalContent: unSetModalContent,
    onSubmit: onSubmit,
    defaultInput: defaultInput,
    type: type,
    inputType: inputType
  }));
};

exports.ModalProvider = ModalProvider;

var useModal = function useModal() {
  var context = (0, _react.useContext)(ModalContext);

  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }

  return context;
};

exports.useModal = useModal;