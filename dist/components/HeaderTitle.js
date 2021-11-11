"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = HeaderTitle;

var _react = _interopRequireWildcard(require("react"));

var _Utilities = _interopRequireDefault(require("./Utilities"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * The title area at the header bar.
 * Depending on its content, the document's title will be set aswell (what will be shown in the browser title bar).
 */
function HeaderTitle(_ref) {
  var logo = _ref.logo,
      appTitle = _ref.appTitle,
      keepAppTitle = _ref.keepAppTitle,
      children = _ref.children,
      className = _ref.className,
      sidebar = _ref.sidebar;

  var uniqueId = "HeaderTitle-" + _Utilities.default.guid();

  var setDocumentTitle = function setDocumentTitle() {
    if (window.blueGridRef && window.blueGridRef.props && window.blueGridRef.props.disableTitleSet === false) {
      var element = document.querySelector("#".concat(uniqueId, " .blue-header-logo-title-labels"));
      var titleElement = document.querySelector("title");

      if (element && element.innerText && titleElement) {
        var titlePaths = element.innerText.split("/");

        if (titlePaths.length > 1) {
          titleElement.innerText = "".concat(titlePaths[titlePaths.length - 1].trim(), " - ").concat(titlePaths[0].trim());
        } else {
          titleElement.innerText = element.innerText;
        }
      }
    }
  };

  (0, _react.useEffect)(setDocumentTitle, []);
  (0, _react.useEffect)(setDocumentTitle, [children]);
  return /*#__PURE__*/_react.default.createElement("h3", {
    id: uniqueId,
    className: "blue-header-logo" + (className ? " ".concat(className) : "") + (sidebar ? " sidebar" : "")
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "blue-header-logo-title"
  }, logo ? /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: logo,
    className: "blue-header-logo-image"
  })), "\xA0") : "", /*#__PURE__*/_react.default.createElement("span", {
    className: "blue-header-logo-title-labels " + (keepAppTitle ? "keep" : "")
  }, appTitle ? /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, appTitle), " ", children ? "/" : "", "\xA0") : "", children)));
}