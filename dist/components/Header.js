"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _HeaderTitle = _interopRequireDefault(require("./HeaderTitle.js"));

var _HeaderActions = _interopRequireDefault(require("./HeaderActions.js"));

var _Utilities = _interopRequireDefault(require("./Utilities.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * The top of a page.
 */
var Header = /*#__PURE__*/function (_React$Component) {
  _inherits(Header, _React$Component);

  var _super = _createSuper(Header);

  function Header() {
    _classCallCheck(this, Header);

    return _super.apply(this, arguments);
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "blue-app-header blue-app-header-extension"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "ui-header-wrapper",
        onClick: function onClick() {
          return _Utilities.default.scrollToTop();
        }
      }), this.props.children);
    }
  }]);

  return Header;
}(_react.default.Component);

Header.Title = _HeaderTitle.default;
Header.Actions = _HeaderActions.default;
var _default = Header;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJVdGlsaXRpZXMiLCJzY3JvbGxUb1RvcCIsInByb3BzIiwiY2hpbGRyZW4iLCJSZWFjdCIsIkNvbXBvbmVudCIsIlRpdGxlIiwiQWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtJQUNNQSxNOzs7Ozs7Ozs7Ozs7O1dBQ0Ysa0JBQVM7QUFDTCwwQkFDSTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsc0JBQ0k7QUFBSyxRQUFBLFNBQVMsRUFBQyxtQkFBZjtBQUFtQyxRQUFBLE9BQU8sRUFBRTtBQUFBLGlCQUFNQyxtQkFBVUMsV0FBVixFQUFOO0FBQUE7QUFBNUMsUUFESixFQUdLLEtBQUtDLEtBQUwsQ0FBV0MsUUFIaEIsQ0FESjtBQU9IOzs7O0VBVGdCQyxlQUFNQyxTOztBQVkzQk4sTUFBTSxDQUFDTyxLQUFQLEdBQWVBLG9CQUFmO0FBQ0FQLE1BQU0sQ0FBQ1EsT0FBUCxHQUFpQkEsc0JBQWpCO2VBRWVSLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi9IZWFkZXJUaXRsZS5qc1wiO1xyXG5pbXBvcnQgQWN0aW9ucyBmcm9tIFwiLi9IZWFkZXJBY3Rpb25zLmpzXCI7XHJcbmltcG9ydCBVdGlsaXRpZXMgZnJvbSBcIi4vVXRpbGl0aWVzLmpzXCI7XHJcblxyXG4vKipcclxuICogVGhlIHRvcCBvZiBhIHBhZ2UuXHJcbiAqL1xyXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmx1ZS1hcHAtaGVhZGVyIGJsdWUtYXBwLWhlYWRlci1leHRlbnNpb25cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWktaGVhZGVyLXdyYXBwZXJcIiBvbkNsaWNrPXsoKSA9PiBVdGlsaXRpZXMuc2Nyb2xsVG9Ub3AoKX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuSGVhZGVyLlRpdGxlID0gVGl0bGU7XHJcbkhlYWRlci5BY3Rpb25zID0gQWN0aW9ucztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXX0=