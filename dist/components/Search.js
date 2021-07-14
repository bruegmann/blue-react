"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Search;

var _react = _interopRequireWildcard(require("react"));

var _MenuItem = _interopRequireDefault(require("./MenuItem"));

var _Utilities = _interopRequireDefault(require("./Utilities"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * A search bar that can be placed to the sidebar or on a page.
 */
function Search(props) {
  var autoFocus = props.autoFocus,
      body = props.body,
      className = props.className,
      icon = props.icon,
      _onChange = props.onChange,
      _onSubmit = props.onSubmit,
      placeholder = props.placeholder,
      reset = props.reset,
      resetIcon = props.resetIcon,
      sidebar = props.sidebar;

  var SearchControlId = "blue-app-search-control-" + _Utilities.default.guid();

  var _useState = (0, _react.useState)(props.value || ""),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      focus = _useState4[0],
      setFocus = _useState4[1];

  var toggleSidebar = function toggleSidebar() {
    if (sidebar) {
      document.dispatchEvent(window.toggleSidebarEvent);
    }
  };

  return /*#__PURE__*/_react.default.createElement("form", {
    className: "blue-app-search " + (body ? "blue-app-search-body " : "") + (focus ? "focus " : "") + className,
    onSubmit: function onSubmit(event) {
      event.preventDefault();
      toggleSidebar();
      if (_onSubmit) _onSubmit(event);
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "blue-app-search-input-group input-group"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "input-group-prepend",
    onClick: function onClick() {
      var _document$getElementB;

      return (_document$getElementB = document.getElementById(SearchControlId)) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.focus();
    }
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "input-group-text"
  }, icon || /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 16 16",
    className: "bi bi-search mt-n1",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    d: "M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    d: "M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
  }))))), /*#__PURE__*/_react.default.createElement("input", {
    type: "search",
    value: value,
    onChange: function onChange(event) {
      setValue(event.target.value);
      if (_onChange) _onChange(event);
    },
    id: SearchControlId,
    className: "blue-app-search-control form-control default input-lg",
    placeholder: placeholder,
    autoFocus: autoFocus,
    style: {
      zIndex: body ? 0 : undefined
    },
    onFocus: function onFocus() {
      return setFocus(true);
    },
    onBlur: function onBlur() {
      return setFocus(false);
    }
  }), reset && value.length > 0 && /*#__PURE__*/_react.default.createElement("div", {
    className: "input-group-btn"
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "blue-app-search-reset-btn btn btn-link btn-lg",
    onClick: function onClick() {
      var _document$getElementB2;

      setValue("");
      (_document$getElementB2 = document.getElementById(SearchControlId)) === null || _document$getElementB2 === void 0 ? void 0 : _document$getElementB2.focus();
      if (_onChange) _onChange({
        target: {
          value: ""
        }
      });
    }
  }, resetIcon || /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    className: "bi bi-x mt-n1",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M4.646 4.646a.5.5 0 01.708 0L8 7.293l2.646-2.647a.5.5 0 01.708.708L8.707 8l2.647 2.646a.5.5 0 01-.708.708L8 8.707l-2.646 2.647a.5.5 0 01-.708-.708L7.293 8 4.646 5.354a.5.5 0 010-.708z"
  }))))), sidebar && /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
    href: "#",
    className: "blue-app-search-btn",
    icon: icon,
    onClick: function onClick(event) {
      event.preventDefault();
      toggleSidebar();
      setTimeout(function () {
        var _document$querySelect;

        (_document$querySelect = document.querySelector(".blue-app-search-control")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.select();
      }, 200);
    }
  }));
}