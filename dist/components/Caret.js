"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

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
 * Caret icon component.
 */
var Caret = /*#__PURE__*/function (_React$Component) {
  _inherits(Caret, _React$Component);

  var _super = _createSuper(Caret);

  function Caret() {
    _classCallCheck(this, Caret);

    return _super.apply(this, arguments);
  }

  _createClass(Caret, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("span", {
        className: "caret " + (this.props.open ? " caret-open " : "") + (this.props.mirrored ? " caret-mirrored " : "") + this.props.className
      });
    }
  }], [{
    key: "defaultProps",
    get: function get() {
      return {
        open: false,
        mirrored: false,
        className: ""
      };
    }
  }]);

  return Caret;
}(_react.default.Component);

Caret.propTypes = {
  /**
   * Indicates if open or not.
   */
  open: _propTypes.default.bool,

  /**
   * By default the caret points to the right when closed. Set mirrored and it will point to the left.
   */
  mirrored: _propTypes.default.bool,
  className: _propTypes.default.string
};
var _default = Caret;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0NhcmV0LmpzIl0sIm5hbWVzIjpbIkNhcmV0IiwicHJvcHMiLCJvcGVuIiwibWlycm9yZWQiLCJjbGFzc05hbWUiLCJSZWFjdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7SUFDTUEsSzs7Ozs7Ozs7Ozs7OztXQVNGLGtCQUFTO0FBQ0wsMEJBQ0k7QUFDSSxRQUFBLFNBQVMsRUFDTCxZQUNDLEtBQUtDLEtBQUwsQ0FBV0MsSUFBWCxHQUFrQixjQUFsQixHQUFtQyxFQURwQyxLQUVDLEtBQUtELEtBQUwsQ0FBV0UsUUFBWCxHQUFzQixrQkFBdEIsR0FBMkMsRUFGNUMsSUFHQSxLQUFLRixLQUFMLENBQVdHO0FBTG5CLFFBREo7QUFVSDs7O1NBbkJELGVBQTBCO0FBQ3RCLGFBQU87QUFDSEYsUUFBQUEsSUFBSSxFQUFFLEtBREg7QUFFSEMsUUFBQUEsUUFBUSxFQUFFLEtBRlA7QUFHSEMsUUFBQUEsU0FBUyxFQUFFO0FBSFIsT0FBUDtBQUtIOzs7O0VBUGVDLGVBQU1DLFM7O0FBdUIxQk4sS0FBSyxDQUFDTyxTQUFOLEdBQWtCO0FBQ2Q7QUFDSjtBQUNBO0FBQ0lMLEVBQUFBLElBQUksRUFBRU0sbUJBQVVDLElBSkY7O0FBTWQ7QUFDSjtBQUNBO0FBQ0lOLEVBQUFBLFFBQVEsRUFBRUssbUJBQVVDLElBVE47QUFVZEwsRUFBQUEsU0FBUyxFQUFFSSxtQkFBVUU7QUFWUCxDQUFsQjtlQWFlVixLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG4vKipcclxuICogQ2FyZXQgaWNvbiBjb21wb25lbnQuXHJcbiAqL1xyXG5jbGFzcyBDYXJldCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgZ2V0IGRlZmF1bHRQcm9wcygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBvcGVuOiBmYWxzZSxcclxuICAgICAgICAgICAgbWlycm9yZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiXCJcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICBcImNhcmV0IFwiICtcclxuICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5vcGVuID8gXCIgY2FyZXQtb3BlbiBcIiA6IFwiXCIpICtcclxuICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5taXJyb3JlZCA/IFwiIGNhcmV0LW1pcnJvcmVkIFwiIDogXCJcIikgK1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2xhc3NOYW1lXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuQ2FyZXQucHJvcFR5cGVzID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbmRpY2F0ZXMgaWYgb3BlbiBvciBub3QuXHJcbiAgICAgKi9cclxuICAgIG9wZW46IFByb3BUeXBlcy5ib29sLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQnkgZGVmYXVsdCB0aGUgY2FyZXQgcG9pbnRzIHRvIHRoZSByaWdodCB3aGVuIGNsb3NlZC4gU2V0IG1pcnJvcmVkIGFuZCBpdCB3aWxsIHBvaW50IHRvIHRoZSBsZWZ0LlxyXG4gICAgICovXHJcbiAgICBtaXJyb3JlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmV0OyJdfQ==