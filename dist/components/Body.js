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
 * Contains the content of the page.
 */
var Body = /*#__PURE__*/function (_React$Component) {
  _inherits(Body, _React$Component);

  var _super = _createSuper(Body);

  function Body() {
    _classCallCheck(this, Body);

    return _super.apply(this, arguments);
  }

  _createClass(Body, [{
    key: "render",
    value: function render() {
      var pageBodyClassName = "blue-app-page";
      return /*#__PURE__*/_react.default.createElement("div", {
        id: this.props.id,
        className: this.props.className ? pageBodyClassName + " " + this.props.className : pageBodyClassName + (this.props.hasActions ? " has-actions" : "") + " break-".concat(this.props.break),
        onClick: this.props.onClick
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: this.props.containerClass
      }, this.props.children));
    }
  }], [{
    key: "defaultProps",
    get: function get() {
      return {
        containerClass: "container-fluid",
        hasActions: false,
        break: "md"
      };
    }
  }]);

  return Body;
}(_react.default.Component);

Body.propTypes = {
  id: _propTypes.default.string,
  className: _propTypes.default.string,

  /**
   * Sets the class name for the container. For more information about container: https://getbootstrap.com/docs/4.5/layout/overview/#containers
   */
  containerClass: _propTypes.default.string,

  /**
   * Set <code>true</code> if this page uses <code>/lt;Actions /&gt;</code>, so this component will get enough padding to avoid overlapping of the content.
   */
  hasActions: _propTypes.default.bool,

  /**
   * <code>sm</code>, <code>md</code>, <code>lg</code> or <code>xl</code>
   */
  break: _propTypes.default.string
};
var _default = Body;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0JvZHkuanMiXSwibmFtZXMiOlsiQm9keSIsInBhZ2VCb2R5Q2xhc3NOYW1lIiwicHJvcHMiLCJpZCIsImNsYXNzTmFtZSIsImhhc0FjdGlvbnMiLCJicmVhayIsIm9uQ2xpY2siLCJjb250YWluZXJDbGFzcyIsImNoaWxkcmVuIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0lBQ01BLEk7Ozs7Ozs7Ozs7Ozs7V0FTRixrQkFBUztBQUNMLFVBQU1DLGlCQUFpQixHQUFHLGVBQTFCO0FBRUEsMEJBQ0k7QUFBSyxRQUFBLEVBQUUsRUFBRSxLQUFLQyxLQUFMLENBQVdDLEVBQXBCO0FBQ0ksUUFBQSxTQUFTLEVBQUUsS0FBS0QsS0FBTCxDQUFXRSxTQUFYLEdBQXVCSCxpQkFBaUIsR0FBRyxHQUFwQixHQUEwQixLQUFLQyxLQUFMLENBQVdFLFNBQTVELEdBQXdFSCxpQkFBaUIsSUFDN0YsS0FBS0MsS0FBTCxDQUFXRyxVQUFYLEdBQXdCLGNBQXhCLEdBQXlDLEVBRG9ELENBQWpCLG9CQUNuQixLQUFLSCxLQUFMLENBQVdJLEtBRFEsQ0FEdkY7QUFHSSxRQUFBLE9BQU8sRUFBRSxLQUFLSixLQUFMLENBQVdLO0FBSHhCLHNCQUtJO0FBQUssUUFBQSxTQUFTLEVBQUUsS0FBS0wsS0FBTCxDQUFXTTtBQUEzQixTQUNLLEtBQUtOLEtBQUwsQ0FBV08sUUFEaEIsQ0FMSixDQURKO0FBV0g7OztTQXRCRCxlQUEwQjtBQUN0QixhQUFPO0FBQ0hELFFBQUFBLGNBQWMsRUFBRSxpQkFEYjtBQUVISCxRQUFBQSxVQUFVLEVBQUUsS0FGVDtBQUdIQyxRQUFBQSxLQUFLLEVBQUU7QUFISixPQUFQO0FBS0g7Ozs7RUFQY0ksZUFBTUMsUzs7QUEwQnpCWCxJQUFJLENBQUNZLFNBQUwsR0FBaUI7QUFDYlQsRUFBQUEsRUFBRSxFQUFFVSxtQkFBVUMsTUFERDtBQUViVixFQUFBQSxTQUFTLEVBQUVTLG1CQUFVQyxNQUZSOztBQUliO0FBQ0o7QUFDQTtBQUNJTixFQUFBQSxjQUFjLEVBQUVLLG1CQUFVQyxNQVBiOztBQVNiO0FBQ0o7QUFDQTtBQUNJVCxFQUFBQSxVQUFVLEVBQUVRLG1CQUFVRSxJQVpUOztBQWNiO0FBQ0o7QUFDQTtBQUNJVCxFQUFBQSxLQUFLLEVBQUVPLG1CQUFVQztBQWpCSixDQUFqQjtlQW9CZWQsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuLyoqXHJcbiAqIENvbnRhaW5zIHRoZSBjb250ZW50IG9mIHRoZSBwYWdlLlxyXG4gKi9cclxuY2xhc3MgQm9keSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgZ2V0IGRlZmF1bHRQcm9wcygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjb250YWluZXJDbGFzczogXCJjb250YWluZXItZmx1aWRcIixcclxuICAgICAgICAgICAgaGFzQWN0aW9uczogZmFsc2UsXHJcbiAgICAgICAgICAgIGJyZWFrOiBcIm1kXCJcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBwYWdlQm9keUNsYXNzTmFtZSA9IFwiYmx1ZS1hcHAtcGFnZVwiO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGlkPXt0aGlzLnByb3BzLmlkfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZSA/IHBhZ2VCb2R5Q2xhc3NOYW1lICsgXCIgXCIgKyB0aGlzLnByb3BzLmNsYXNzTmFtZSA6IHBhZ2VCb2R5Q2xhc3NOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgKyAodGhpcy5wcm9wcy5oYXNBY3Rpb25zID8gXCIgaGFzLWFjdGlvbnNcIiA6IFwiXCIpICsgYCBicmVhay0ke3RoaXMucHJvcHMuYnJlYWt9YH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGlja31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY29udGFpbmVyQ2xhc3N9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkJvZHkucHJvcFR5cGVzID0ge1xyXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBjbGFzcyBuYW1lIGZvciB0aGUgY29udGFpbmVyLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCBjb250YWluZXI6IGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS9kb2NzLzQuNS9sYXlvdXQvb3ZlcnZpZXcvI2NvbnRhaW5lcnNcclxuICAgICAqL1xyXG4gICAgY29udGFpbmVyQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgPGNvZGU+dHJ1ZTwvY29kZT4gaWYgdGhpcyBwYWdlIHVzZXMgPGNvZGU+L2x0O0FjdGlvbnMgLyZndDs8L2NvZGU+LCBzbyB0aGlzIGNvbXBvbmVudCB3aWxsIGdldCBlbm91Z2ggcGFkZGluZyB0byBhdm9pZCBvdmVybGFwcGluZyBvZiB0aGUgY29udGVudC5cclxuICAgICAqL1xyXG4gICAgaGFzQWN0aW9uczogUHJvcFR5cGVzLmJvb2wsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiA8Y29kZT5zbTwvY29kZT4sIDxjb2RlPm1kPC9jb2RlPiwgPGNvZGU+bGc8L2NvZGU+IG9yIDxjb2RlPnhsPC9jb2RlPlxyXG4gICAgICovXHJcbiAgICBicmVhazogUHJvcFR5cGVzLnN0cmluZ1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9keTsiXX0=