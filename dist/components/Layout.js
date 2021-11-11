"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Layout;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _excluded = ["children", "className", "disableHeaders", "expandSidebar", "hideSidebarMenu", "open", "onChangeOpen", "sidebarToggleIconComponent"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Layout(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$disableHeaders = _ref.disableHeaders,
      disableHeaders = _ref$disableHeaders === void 0 ? false : _ref$disableHeaders,
      _ref$expandSidebar = _ref.expandSidebar,
      expandSidebar = _ref$expandSidebar === void 0 ? false : _ref$expandSidebar,
      _ref$hideSidebarMenu = _ref.hideSidebarMenu,
      hideSidebarMenu = _ref$hideSidebarMenu === void 0 ? false : _ref$hideSidebarMenu,
      open = _ref.open,
      onChangeOpen = _ref.onChangeOpen,
      sidebarToggleIconComponent = _ref.sidebarToggleIconComponent,
      rest = _objectWithoutProperties(_ref, _excluded);

  var toggleOpen = function toggleOpen() {
    return onChangeOpen(!open);
  };

  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: (0, _clsx.default)("blue-layout", className, {
      expandSidebar: expandSidebar,
      disableHeaders: disableHeaders,
      hasNoSidebarMenu: hideSidebarMenu,
      hasSidebarMenu: !hideSidebarMenu,
      open: open
    })
  }, rest), /*#__PURE__*/_react.default.createElement("div", {
    className: "blue-sidebar-toggler"
  }, !hideSidebarMenu && /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "blue-open-menu blue-sidebar-btn btn",
    onClick: toggleOpen
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "blue-sidebar-exception position-absolute w-100 h-100"
  }), sidebarToggleIconComponent || "☰")), children);
}