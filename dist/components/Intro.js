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
  }, title)), /*#__PURE__*/_react.default.createElement("h2", null, "Test"), children)));
}

var _default = Intro;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0ludHJvLnRzeCJdLCJuYW1lcyI6WyJJbnRybyIsImxvZ28iLCJsb2dvTWF4V2lkdGgiLCJ0aXRsZSIsImNoaWxkcmVuIiwiVXRpbGl0aWVzIiwicmVnaXN0ZXJGbHVlbnRCdG5zIiwibWF4V2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7OztBQXdCQSxTQUFTQSxLQUFULE9BQThFO0FBQUEsTUFBN0RDLElBQTZELFFBQTdEQSxJQUE2RDtBQUFBLCtCQUF2REMsWUFBdUQ7QUFBQSxNQUF2REEsWUFBdUQsa0NBQXhDLE9BQXdDO0FBQUEsTUFBL0JDLEtBQStCLFFBQS9CQSxLQUErQjtBQUFBLE1BQXhCQyxRQUF3QixRQUF4QkEsUUFBd0I7QUFDMUUsd0JBQVUsWUFBTTtBQUNaQyx1QkFBVUMsa0JBQVY7QUFDSCxHQUZELEVBRUcsRUFGSDtBQUlBLHNCQUNJO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixrQkFDSTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsa0JBQ0k7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLGtCQUNJO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixrQkFDSTtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLFFBQVEsRUFBRUw7QUFBWixLQUFaO0FBQXdDLElBQUEsR0FBRyxFQUFFRCxJQUE3QztBQUFtRCxJQUFBLEdBQUcsRUFBQztBQUF2RCxJQURKLGVBRUk7QUFBSSxJQUFBLFNBQVMsRUFBQztBQUFkLEtBQTJCRSxLQUEzQixDQUZKLENBREosZUFNSSxnREFOSixFQVFLQyxRQVJMLENBREosQ0FESixDQURKO0FBZ0JIOztlQUVjSixLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBVdGlsaXRpZXMgZnJvbSBcIi4vVXRpbGl0aWVzXCJcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW50cm9Qcm9wcyB7XHJcbiAgICAvKipcclxuICAgICAqIENhbiBiZSBhbiBpbWFnZS4gV2lsbCBiZSBwbGFjZWQgaW5zaWRlIG9mIHRoZSBgc3JjYCBhdHRyaWJ1dGUuXHJcbiAgICAgKi9cclxuICAgIGxvZ28/OiBzdHJpbmdcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1heCB3aWR0aCBmcm9tIHRoZSBsb2dvLlxyXG4gICAgICovXHJcbiAgICBsb2dvTWF4V2lkdGg/OiBzdHJpbmdcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRleHQgd2hpY2ggd2lsbCBiZSBwbGFjZWQgdW5kZXIgdGhlIGxvZ28uXHJcbiAgICAgKi9cclxuICAgIHRpdGxlPzogc3RyaW5nXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb250ZW50XHJcbiAgICAgKi9cclxuICAgIGNoaWxkcmVuPzogYW55XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEludHJvKHsgbG9nbywgbG9nb01heFdpZHRoID0gXCIxMDBweFwiLCB0aXRsZSwgY2hpbGRyZW4gfTogSW50cm9Qcm9wcykge1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBVdGlsaXRpZXMucmVnaXN0ZXJGbHVlbnRCdG5zKClcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWduLWluLXNjcmVlblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZ24taW4tY29udGFpbmVyIG14LTFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVtYm90cm9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IG1heFdpZHRoOiBsb2dvTWF4V2lkdGggfX0gc3JjPXtsb2dvfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibXQtNCBtYi0zXCI+e3RpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5UZXN0PC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnRybyJdfQ==