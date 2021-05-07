"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Utilities = _interopRequireDefault(require("./Utilities"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Can be used for a sign-in page.
 */
function Intro(_ref) {
  var logo = _ref.logo,
      _ref$logoMaxWidth = _ref.logoMaxWidth,
      logoMaxWidth = _ref$logoMaxWidth === void 0 ? "100px" : _ref$logoMaxWidth,
      title = _ref.title,
      children = _ref.children;
  (0, _react.useEffect)(function () {
    _Utilities.default.registerFluentBtns();
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "sign-in-screen"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sign-in-container mx-1"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "jumbotron"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: logoMaxWidth
    },
    src: logo,
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("h2", {
    className: "mt-4 mb-3"
  }, title)), children)));
}

var _default = Intro;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0ludHJvLnRzeCJdLCJuYW1lcyI6WyJJbnRybyIsImxvZ28iLCJsb2dvTWF4V2lkdGgiLCJ0aXRsZSIsImNoaWxkcmVuIiwiVXRpbGl0aWVzIiwicmVnaXN0ZXJGbHVlbnRCdG5zIiwibWF4V2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7OztBQXdCQTtBQUNBO0FBQ0E7QUFDQSxTQUFTQSxLQUFULE9BQThFO0FBQUEsTUFBN0RDLElBQTZELFFBQTdEQSxJQUE2RDtBQUFBLCtCQUF2REMsWUFBdUQ7QUFBQSxNQUF2REEsWUFBdUQsa0NBQXhDLE9BQXdDO0FBQUEsTUFBL0JDLEtBQStCLFFBQS9CQSxLQUErQjtBQUFBLE1BQXhCQyxRQUF3QixRQUF4QkEsUUFBd0I7QUFDMUUsd0JBQVUsWUFBTTtBQUNaQyx1QkFBVUMsa0JBQVY7QUFDSCxHQUZELEVBRUcsRUFGSDtBQUlBLHNCQUNJO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixrQkFDSTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsa0JBQ0k7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLGtCQUNJO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixrQkFDSTtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLFFBQVEsRUFBRUw7QUFBWixLQUFaO0FBQXdDLElBQUEsR0FBRyxFQUFFRCxJQUE3QztBQUFtRCxJQUFBLEdBQUcsRUFBQztBQUF2RCxJQURKLGVBRUk7QUFBSSxJQUFBLFNBQVMsRUFBQztBQUFkLEtBQTJCRSxLQUEzQixDQUZKLENBREosRUFNS0MsUUFOTCxDQURKLENBREosQ0FESjtBQWNIOztlQUVjSixLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBVdGlsaXRpZXMgZnJvbSBcIi4vVXRpbGl0aWVzXCJcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW50cm9Qcm9wcyB7XHJcbiAgICAvKipcclxuICAgICAqIENhbiBiZSBhbiBpbWFnZS4gV2lsbCBiZSBwbGFjZWQgaW5zaWRlIG9mIHRoZSBgc3JjYCBhdHRyaWJ1dGUuXHJcbiAgICAgKi9cclxuICAgIGxvZ28/OiBzdHJpbmdcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1heCB3aWR0aCBmcm9tIHRoZSBsb2dvLlxyXG4gICAgICovXHJcbiAgICBsb2dvTWF4V2lkdGg/OiBzdHJpbmdcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRleHQgd2hpY2ggd2lsbCBiZSBwbGFjZWQgdW5kZXIgdGhlIGxvZ28uXHJcbiAgICAgKi9cclxuICAgIHRpdGxlPzogc3RyaW5nXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb250ZW50XHJcbiAgICAgKi9cclxuICAgIGNoaWxkcmVuPzogYW55XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDYW4gYmUgdXNlZCBmb3IgYSBzaWduLWluIHBhZ2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBJbnRybyh7IGxvZ28sIGxvZ29NYXhXaWR0aCA9IFwiMTAwcHhcIiwgdGl0bGUsIGNoaWxkcmVuIH06IEludHJvUHJvcHMpIHtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgVXRpbGl0aWVzLnJlZ2lzdGVyRmx1ZW50QnRucygpXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lnbi1pbi1zY3JlZW5cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWduLWluLWNvbnRhaW5lciBteC0xXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1bWJvdHJvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyBtYXhXaWR0aDogbG9nb01heFdpZHRoIH19IHNyYz17bG9nb30gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm10LTQgbWItM1wiPnt0aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEludHJvIl19