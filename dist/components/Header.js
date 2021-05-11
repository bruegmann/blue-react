"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _react = _interopRequireDefault(require("react"));

var _Utilities = _interopRequireDefault(require("./Utilities"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The top of a page.
 */
function Header(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "blue-app-header blue-app-header-extension"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ui-header-wrapper",
    onClick: _Utilities.default.scrollToTop
  }), children);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0hlYWRlci50c3giXSwibmFtZXMiOlsiSGVhZGVyIiwiY2hpbGRyZW4iLCJVdGlsaXRpZXMiLCJzY3JvbGxUb1RvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBTUE7QUFDQTtBQUNBO0FBQ2UsU0FBU0EsTUFBVCxPQUEyQztBQUFBLE1BQXpCQyxRQUF5QixRQUF6QkEsUUFBeUI7QUFDdEQsc0JBQ0k7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLGtCQUNJO0FBQUssSUFBQSxTQUFTLEVBQUMsbUJBQWY7QUFBbUMsSUFBQSxPQUFPLEVBQUVDLG1CQUFVQztBQUF0RCxJQURKLEVBR0tGLFFBSEwsQ0FESjtBQU9IIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBVdGlsaXRpZXMgZnJvbSBcIi4vVXRpbGl0aWVzXCJcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSGVhZGVyUHJvcHMge1xyXG4gICAgY2hpbGRyZW4/OiBhbnlcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSB0b3Agb2YgYSBwYWdlLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKHsgY2hpbGRyZW4gfTogSGVhZGVyUHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibHVlLWFwcC1oZWFkZXIgYmx1ZS1hcHAtaGVhZGVyLWV4dGVuc2lvblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpLWhlYWRlci13cmFwcGVyXCIgb25DbGljaz17VXRpbGl0aWVzLnNjcm9sbFRvVG9wfSAvPlxyXG5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il19