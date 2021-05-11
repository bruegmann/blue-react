"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Header = _interopRequireDefault(require("./Header"));

var _Body = _interopRequireDefault(require("./Body"));

var _Utilities = _interopRequireDefault(require("./Utilities"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Page(_ref) {
  var children = _ref.children,
      title = _ref.title;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      hasHeader = _useState2[0],
      setHasHeader = _useState2[1];

  var elementRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    _Utilities.default.registerFluentBtns();
  });
  (0, _react.useEffect)(function () {
    if (elementRef && elementRef.current) {
      var headerElement = elementRef.current.querySelector(".blue-app-header");
      setHasHeader(headerElement !== null && headerElement !== undefined);
    }
  }, [elementRef]);
  (0, _react.useEffect)(function () {
    if (title) {
      document.querySelector("title").innerText = title;
    }
  }, [title]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)("blue-app-page-wrapper", {
      "hasHeader": hasHeader
    }),
    ref: elementRef
  }, children);
}
/**
 * @deprecated Import the component seperated with `import { Header } from "blue-react"`.
 */


Page.Header = _Header.default;
/**
 * @deprecated Import the component seperated with `import { Body } from "blue-react"`.
 */

Page.Body = _Body.default;
Page.propTypes = {
  /**
   * @deprecated This isn't necessary anymore to use Actions on a page.
   */
  hasActions: _propTypes.default.bool,

  /**
  * Will be set to the document's `<title>` tag.
  */
  title: _propTypes.default.string
};
var _default = Page;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1BhZ2UuanMiXSwibmFtZXMiOlsiUGFnZSIsImNoaWxkcmVuIiwidGl0bGUiLCJoYXNIZWFkZXIiLCJzZXRIYXNIZWFkZXIiLCJlbGVtZW50UmVmIiwiVXRpbGl0aWVzIiwicmVnaXN0ZXJGbHVlbnRCdG5zIiwiY3VycmVudCIsImhlYWRlckVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidW5kZWZpbmVkIiwiZG9jdW1lbnQiLCJpbm5lclRleHQiLCJIZWFkZXIiLCJCb2R5IiwicHJvcFR5cGVzIiwiaGFzQWN0aW9ucyIsIlByb3BUeXBlcyIsImJvb2wiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLFNBQVNBLElBQVQsT0FBbUM7QUFBQSxNQUFuQkMsUUFBbUIsUUFBbkJBLFFBQW1CO0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTOztBQUMvQixrQkFBa0MscUJBQVMsS0FBVCxDQUFsQztBQUFBO0FBQUEsTUFBT0MsU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFDQSxNQUFNQyxVQUFVLEdBQUcsbUJBQU8sSUFBUCxDQUFuQjtBQUVBLHdCQUFVLFlBQU07QUFDWkMsdUJBQVVDLGtCQUFWO0FBQ0gsR0FGRDtBQUlBLHdCQUFVLFlBQU07QUFDWixRQUFJRixVQUFVLElBQUlBLFVBQVUsQ0FBQ0csT0FBN0IsRUFBc0M7QUFDbEMsVUFBTUMsYUFBYSxHQUFHSixVQUFVLENBQUNHLE9BQVgsQ0FBbUJFLGFBQW5CLENBQWlDLGtCQUFqQyxDQUF0QjtBQUNBTixNQUFBQSxZQUFZLENBQUNLLGFBQWEsS0FBSyxJQUFsQixJQUEwQkEsYUFBYSxLQUFLRSxTQUE3QyxDQUFaO0FBQ0g7QUFDSixHQUxELEVBS0csQ0FBQ04sVUFBRCxDQUxIO0FBT0Esd0JBQVUsWUFBTTtBQUNaLFFBQUlILEtBQUosRUFBVztBQUNQVSxNQUFBQSxRQUFRLENBQUNGLGFBQVQsQ0FBdUIsT0FBdkIsRUFBZ0NHLFNBQWhDLEdBQTRDWCxLQUE1QztBQUNIO0FBQ0osR0FKRCxFQUlHLENBQUNBLEtBQUQsQ0FKSDtBQU1BLHNCQUNJO0FBQUssSUFBQSxTQUFTLEVBQUUseUJBQUcsdUJBQUgsRUFBNEI7QUFBRSxtQkFBYUM7QUFBZixLQUE1QixDQUFoQjtBQUF5RSxJQUFBLEdBQUcsRUFBRUU7QUFBOUUsS0FDS0osUUFETCxDQURKO0FBS0g7QUFFRDtBQUNBO0FBQ0E7OztBQUNBRCxJQUFJLENBQUNjLE1BQUwsR0FBY0EsZUFBZDtBQUVBO0FBQ0E7QUFDQTs7QUFDQWQsSUFBSSxDQUFDZSxJQUFMLEdBQVlBLGFBQVo7QUFFQWYsSUFBSSxDQUFDZ0IsU0FBTCxHQUFpQjtBQUNiO0FBQ0o7QUFDQTtBQUNJQyxFQUFBQSxVQUFVLEVBQUVDLG1CQUFVQyxJQUpUOztBQU1iO0FBQ0o7QUFDQTtBQUNJakIsRUFBQUEsS0FBSyxFQUFFZ0IsbUJBQVVFO0FBVEosQ0FBakI7ZUFZZXBCLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjeCBmcm9tIFwiY2xhc3NuYW1lc1wiXHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XHJcbmltcG9ydCBCb2R5IGZyb20gXCIuL0JvZHlcIjtcclxuaW1wb3J0IFV0aWxpdGllcyBmcm9tIFwiLi9VdGlsaXRpZXNcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuZnVuY3Rpb24gUGFnZSh7IGNoaWxkcmVuLCB0aXRsZSB9KSB7XHJcbiAgICBjb25zdCBbaGFzSGVhZGVyLCBzZXRIYXNIZWFkZXJdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBlbGVtZW50UmVmID0gdXNlUmVmKG51bGwpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBVdGlsaXRpZXMucmVnaXN0ZXJGbHVlbnRCdG5zKClcclxuICAgIH0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoZWxlbWVudFJlZiAmJiBlbGVtZW50UmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgaGVhZGVyRWxlbWVudCA9IGVsZW1lbnRSZWYuY3VycmVudC5xdWVyeVNlbGVjdG9yKFwiLmJsdWUtYXBwLWhlYWRlclwiKVxyXG4gICAgICAgICAgICBzZXRIYXNIZWFkZXIoaGVhZGVyRWxlbWVudCAhPT0gbnVsbCAmJiBoZWFkZXJFbGVtZW50ICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2VsZW1lbnRSZWZdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRpdGxlKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0aXRsZVwiKS5pbm5lclRleHQgPSB0aXRsZVxyXG4gICAgICAgIH1cclxuICAgIH0sIFt0aXRsZV0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJibHVlLWFwcC1wYWdlLXdyYXBwZXJcIiwgeyBcImhhc0hlYWRlclwiOiBoYXNIZWFkZXIgfSl9IHJlZj17ZWxlbWVudFJlZn0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXByZWNhdGVkIEltcG9ydCB0aGUgY29tcG9uZW50IHNlcGVyYXRlZCB3aXRoIGBpbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiYmx1ZS1yZWFjdFwiYC5cclxuICovXHJcblBhZ2UuSGVhZGVyID0gSGVhZGVyO1xyXG5cclxuLyoqXHJcbiAqIEBkZXByZWNhdGVkIEltcG9ydCB0aGUgY29tcG9uZW50IHNlcGVyYXRlZCB3aXRoIGBpbXBvcnQgeyBCb2R5IH0gZnJvbSBcImJsdWUtcmVhY3RcImAuXHJcbiAqL1xyXG5QYWdlLkJvZHkgPSBCb2R5O1xyXG5cclxuUGFnZS5wcm9wVHlwZXMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIEBkZXByZWNhdGVkIFRoaXMgaXNuJ3QgbmVjZXNzYXJ5IGFueW1vcmUgdG8gdXNlIEFjdGlvbnMgb24gYSBwYWdlLlxyXG4gICAgICovXHJcbiAgICBoYXNBY3Rpb25zOiBQcm9wVHlwZXMuYm9vbCxcclxuXHJcbiAgICAvKipcclxuICAgICogV2lsbCBiZSBzZXQgdG8gdGhlIGRvY3VtZW50J3MgYDx0aXRsZT5gIHRhZy5cclxuICAgICovXHJcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlOyJdfQ==