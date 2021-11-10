"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MenuItem;

var _clsx = _interopRequireDefault(require("clsx"));

var _react = _interopRequireWildcard(require("react"));

var _Caret = _interopRequireDefault(require("./Caret"));

var _Outside = _interopRequireDefault(require("./Outside"));

var _Utilities = _interopRequireDefault(require("./Utilities"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Link, button or custom component for Sidebar, Actions or ActionMenu
 */
function MenuItem(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showDropdown = _useState2[0],
      setShowDropdown = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      active = _useState4[0],
      setActive = _useState4[1];

  var checkActive = function checkActive() {
    setActive(props.href && window.location.hash.indexOf(props.href) > -1 || props.isHome && (window.location.hash === "" || window.location.hash === "#/") ? true : false);
  };

  var onClick = function onClick(event) {
    if (props.href === "#") {
      event.preventDefault();
    }

    if (props.onClick) {
      props.onClick(event);
    }

    if (props.children) {
      setShowDropdown(!showDropdown);
    } // When user clicks again on active menu item, scroll to top of page


    if (props.href && props.href === window.location.hash) {
      _Utilities.default.scrollToTop();
    }
  };

  var onClickOutside = function onClickOutside(_ref) {
    var target = _ref.target;

    // Don't trigger when clicking on MenuItem
    if (!_Utilities.default.hasClass(target, "blue-app-sidebar-dropdown-toggle") && !_Utilities.default.hasClass(target, "blue-app-sidebar-label")) {
      setShowDropdown(false);
    }
  };

  (0, _react.useEffect)(function () {
    checkActive();
    window.addEventListener("hashchange", function () {
      checkActive();
    });
  }, []);
  (0, _react.useEffect)(function () {
    if (props.showDropdown !== undefined) setShowDropdown(props.showDropdown);
  }, [props.showDropdown]);
  var className = "blue-app-toggle-page blue-app-sidebar-btn btn" + (props.isActive ? " active" : "") + (props.className ? " " + props.className : "") + (props.children ? " blue-app-sidebar-dropdown-toggle" : "");
  var icon, iconForActive;

  if (typeof props.icon === "string") {
    // is className
    icon = /*#__PURE__*/_react.default.createElement("span", {
      className: props.icon + (props.children ? " blue-app-sidebar-dropdown-icon" : "")
    });
  } else {
    // is element / component
    icon = props.icon;
  }

  if (typeof props.iconForActive === "string") {
    // is className
    iconForActive = /*#__PURE__*/_react.default.createElement("span", {
      className: props.iconForActive + (props.children ? " blue-app-sidebar-dropdown-icon" : "")
    });
  } else {
    // is element / component
    iconForActive = props.iconForActive;
  }

  var passingProps = {
    id: "blue-action-menu-item-" + _Utilities.default.guid()
  };
  var removeFromAttrs = ["isActive", "isHome", "children", "dropdownClassName", "showDropdown", "supportOutside", "elementType"];
  Object.keys(props).forEach(function (key) {
    if (!removeFromAttrs.includes(key)) {
      passingProps[key] = props[key];
    }
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/(0, _react.createElement)(props.elementType || (props.href ? "a" : "button"), _objectSpread(_objectSpread({}, passingProps), {}, {
    className: className + (props.isActive || active ? " active" : "") + (props.label ? " has-label" : ""),
    onClick: onClick
  }), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", {
    className: (0, _clsx.default)("blue-app-menu-item-icon", {
      hasIconForActive: iconForActive
    })
  }, icon), iconForActive && /*#__PURE__*/_react.default.createElement("span", {
    className: "blue-app-menu-item-icon iconForActive"
  }, iconForActive), props.label && /*#__PURE__*/_react.default.createElement("span", {
    className: "blue-app-sidebar-label text-truncate"
  }, props.label), props.children && /*#__PURE__*/_react.default.createElement(_Caret.default, {
    open: showDropdown,
    mirrored: true,
    className: "blue-app-sidebar-dropdown-caret mt-2"
  }))), showDropdown && (props.supportOutside ? /*#__PURE__*/_react.default.createElement(_Outside.default, {
    className: "blue-app-sidebar-dropdown ".concat(props.dropdownClassName),
    onClickOutside: onClickOutside
  }, props.children) : /*#__PURE__*/_react.default.createElement("div", {
    className: "blue-app-sidebar-dropdown ".concat(props.dropdownClassName)
  }, props.children)));
}