"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ActionMenu;

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

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * The Action Menu on the top right of a page. You can place Actions here which are in context of the current page.
 */
function ActionMenu(props) {
  var hideToggleAction = props.hideToggleAction,
      children = props.children,
      className = props.className,
      _props$toggleIcon = props.toggleIcon,
      toggleIcon = _props$toggleIcon === void 0 ? /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    className: "bi bi-three-dots-vertical",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M9.5 13a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
  })) : _props$toggleIcon;

  var _break = props.break || "lg";

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      actionsToggledIn = _useState2[0],
      setActionsToggledIn = _useState2[1];

  var toggleActions = function toggleActions() {
    _Utilities.default.toggleActions();

    initToggleStatus();
  };

  var initToggleStatus = function initToggleStatus() {
    setActionsToggledIn(_Utilities.default.hasClass(document.querySelector(".blue-actions"), "open"));
  };

  (0, _react.useEffect)(function () {
    initToggleStatus();
    var appWrapper = document.querySelector(".blue-wrapper");

    if (appWrapper) {
      appWrapper.onclick = toggleActions;
    }

    document.querySelectorAll(".blue-actions-menu .nav-link").forEach(function (link) {
      link.addEventListener("click", function () {
        if (actionsToggledIn) {
          toggleActions();
        }
      });
    });
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "blue-actions navbar ".concat(className, " navbar-expand").concat(_break !== "none" ? "-".concat(_break) : "", " ").concat(_break)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "blue-header-wrapper",
    onClick: _Utilities.default.scrollToTop
  }), /*#__PURE__*/_react.default.createElement("ul", {
    className: "blue-actions-menu nav navbar-nav navbar-right"
  }, !actionsToggledIn && !hideToggleAction ? /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
    className: "blue-actions-menu-toggle",
    onClick: function onClick() {
      return toggleActions();
    },
    icon: toggleIcon,
    "aria-label": "Toggle menu"
  }) : "", children));
}