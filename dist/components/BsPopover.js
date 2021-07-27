"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BsPopover;

var _bootstrap = require("bootstrap");

var _react = require("react");

var _server = require("react-dom/server");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Wrapper for Bootstrap's Popover component.
 */
function BsPopover(_ref) {
  var children = _ref.children,
      content = _ref.content,
      options = _ref.options;
  var popoverRef = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    var myPopover = popoverRef.current;

    var bsPopover = _bootstrap.Popover.getInstance(myPopover);

    if (content !== undefined) {
      var contentHtml = (0, _server.renderToStaticMarkup)(content);
      options = _objectSpread(_objectSpread({}, options), {}, {
        content: contentHtml,
        html: true
      });
    }

    if (!bsPopover) {
      bsPopover = new _bootstrap.Popover(myPopover, options);
    }
  }, []);
  return /*#__PURE__*/(0, _react.cloneElement)(children, {
    ref: popoverRef
  });
}