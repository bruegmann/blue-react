"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

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
 * Hier werden z.B. Buttons für die aktuelle Seite platziert.
 */
var HeaderActions = /*#__PURE__*/function (_React$Component) {
  _inherits(HeaderActions, _React$Component);

  var _super = _createSuper(HeaderActions);

  function HeaderActions() {
    _classCallCheck(this, HeaderActions);

    return _super.apply(this, arguments);
  }

  _createClass(HeaderActions, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "blue-app-actions navbar ".concat(this.props.className, " navbar-expand-").concat(this.props.breakpoint, " ").concat(this.props.breakpoint)
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "ui-header-wrapper",
        onClick: function onClick() {
          return _Utilities.default.scrollToTop();
        }
      }), this.props.children);
    }
  }], [{
    key: "defaultProps",
    get: function get() {
      return {
        className: "",
        breakpoint: "lg"
      };
    }
  }]);

  return HeaderActions;
}(_react.default.Component);

HeaderActions.propTypes = {
  className: _propTypes.default.string,

  /**
   * Legt fest, ab welcher Breite umgebrochen wird. Mögliche Werte: <code>"sm"</code> (768px), <code>"md"</code> (992px), <code>"lg"</code> (1200px)
   */
  breakpoint: _propTypes.default.string
};
var _default = HeaderActions;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0hlYWRlckFjdGlvbnMuanMiXSwibmFtZXMiOlsiSGVhZGVyQWN0aW9ucyIsInByb3BzIiwiY2xhc3NOYW1lIiwiYnJlYWtwb2ludCIsIlV0aWxpdGllcyIsInNjcm9sbFRvVG9wIiwiY2hpbGRyZW4iLCJSZWFjdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtJQUNNQSxhOzs7Ozs7Ozs7Ozs7O1dBUUYsa0JBQVM7QUFDTCwwQkFDSTtBQUFLLFFBQUEsU0FBUyxvQ0FBNkIsS0FBS0MsS0FBTCxDQUFXQyxTQUF4Qyw0QkFBbUUsS0FBS0QsS0FBTCxDQUFXRSxVQUE5RSxjQUE0RixLQUFLRixLQUFMLENBQVdFLFVBQXZHO0FBQWQsc0JBQ0k7QUFBSyxRQUFBLFNBQVMsRUFBQyxtQkFBZjtBQUFtQyxRQUFBLE9BQU8sRUFBRTtBQUFBLGlCQUFNQyxtQkFBVUMsV0FBVixFQUFOO0FBQUE7QUFBNUMsUUFESixFQUdLLEtBQUtKLEtBQUwsQ0FBV0ssUUFIaEIsQ0FESjtBQU9IOzs7U0FmRCxlQUEwQjtBQUN0QixhQUFPO0FBQ0hKLFFBQUFBLFNBQVMsRUFBRSxFQURSO0FBRUhDLFFBQUFBLFVBQVUsRUFBRTtBQUZULE9BQVA7QUFJSDs7OztFQU51QkksZUFBTUMsUzs7QUFtQmxDUixhQUFhLENBQUNTLFNBQWQsR0FBMEI7QUFDdEJQLEVBQUFBLFNBQVMsRUFBRVEsbUJBQVVDLE1BREM7O0FBR3RCO0FBQ0o7QUFDQTtBQUNJUixFQUFBQSxVQUFVLEVBQUVPLG1CQUFVQztBQU5BLENBQTFCO2VBU2VYLGEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbmltcG9ydCBVdGlsaXRpZXMgZnJvbSBcIi4vVXRpbGl0aWVzLmpzXCI7XHJcblxyXG4vKipcclxuICogSGllciB3ZXJkZW4gei5CLiBCdXR0b25zIGbDvHIgZGllIGFrdHVlbGxlIFNlaXRlIHBsYXR6aWVydC5cclxuICovXHJcbmNsYXNzIEhlYWRlckFjdGlvbnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIGdldCBkZWZhdWx0UHJvcHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICBicmVha3BvaW50OiBcImxnXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYmx1ZS1hcHAtYWN0aW9ucyBuYXZiYXIgJHt0aGlzLnByb3BzLmNsYXNzTmFtZX0gbmF2YmFyLWV4cGFuZC0ke3RoaXMucHJvcHMuYnJlYWtwb2ludH0gJHt0aGlzLnByb3BzLmJyZWFrcG9pbnR9YH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpLWhlYWRlci13cmFwcGVyXCIgb25DbGljaz17KCkgPT4gVXRpbGl0aWVzLnNjcm9sbFRvVG9wKCl9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkhlYWRlckFjdGlvbnMucHJvcFR5cGVzID0ge1xyXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTGVndCBmZXN0LCBhYiB3ZWxjaGVyIEJyZWl0ZSB1bWdlYnJvY2hlbiB3aXJkLiBNw7ZnbGljaGUgV2VydGU6IDxjb2RlPlwic21cIjwvY29kZT4gKDc2OHB4KSwgPGNvZGU+XCJtZFwiPC9jb2RlPiAoOTkycHgpLCA8Y29kZT5cImxnXCI8L2NvZGU+ICgxMjAwcHgpXHJcbiAgICAgKi9cclxuICAgIGJyZWFrcG9pbnQ6IFByb3BUeXBlcy5zdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyQWN0aW9uczsiXX0=