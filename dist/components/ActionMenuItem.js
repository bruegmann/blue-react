"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MenuItem = _interopRequireDefault(require("./MenuItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
 * @deprecated This is only an alias to MenuItem, please use MenuItem instead.
 * <span class="badge badge-warning">Deprecated</span> This is just an alias for <code>MenuItem</code>, so you should use that component instead.
 * If you need the older <code>ActionMenuItem</code>, make sure to the prop <code>useDeprecated</code>.<br/>
 * List Item and Link for the current Action Menu.
 */
var ActionMenuItem = /*#__PURE__*/function (_React$Component) {
  _inherits(ActionMenuItem, _React$Component);

  var _super = _createSuper(ActionMenuItem);

  function ActionMenuItem() {
    _classCallCheck(this, ActionMenuItem);

    return _super.apply(this, arguments);
  }

  _createClass(ActionMenuItem, [{
    key: "render",
    value: function render() {
      var _this = this;

      if (this.props.useDeprecated) {
        var props = {};
        Object.keys(this.props).map(function (key) {
          if (key !== "navItemClassName" && key !== "icon" && key !== "label") {
            props[key] = _this.props[key];
          }
        });
        return /*#__PURE__*/_react.default.createElement("li", {
          className: "nav-item " + this.props.navItemClassName
        }, /*#__PURE__*/_react.default.createElement("a", _extends({}, props, {
          href: this.props.href,
          className: "nav-link blue-app-actions-menu-item " + this.props.className
        }), /*#__PURE__*/_react.default.createElement("span", {
          className: this.props.icon
        }), this.props.label && /*#__PURE__*/_react.default.createElement("span", {
          className: "blue-app-actions-label"
        }, this.props.icon && /*#__PURE__*/_react.default.createElement("span", null, "\xA0"), this.props.label)));
      } else {
        return /*#__PURE__*/_react.default.createElement(_MenuItem.default, this.props);
      }
    }
  }], [{
    key: "defaultProps",
    get: function get() {
      return {
        navItemClassName: "",
        className: "",
        href: "javascript:void(0)",
        useDeprecated: false
      };
    }
  }]);

  return ActionMenuItem;
}(_react.default.Component);

ActionMenuItem.propTypes = {
  /**
   * Extends className of the <code>.nav-item</code> element.
   */
  navItemClassName: _propTypes.default.string,

  /**
   * Extends className of the <code>.nav-link</code> element.
   */
  className: _propTypes.default.string,
  href: _propTypes.default.string,

  /**
   * className for the icon.
   */
  icon: _propTypes.default.string,

  /**
   * Label for the link.
   */
  label: _propTypes.default.any,

  /**
   * Tooltip on hover.
   */
  title: _propTypes.default.string,

  /**
   * Set <code>true</code> to use the old ActionMenuItem. Otherwise this component is just an alias to <code>MenuItem</code>.
   */
  useDeprecated: _propTypes.default.bool
};
var _default = ActionMenuItem;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0FjdGlvbk1lbnVJdGVtLmpzIl0sIm5hbWVzIjpbIkFjdGlvbk1lbnVJdGVtIiwicHJvcHMiLCJ1c2VEZXByZWNhdGVkIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsIm5hdkl0ZW1DbGFzc05hbWUiLCJocmVmIiwiY2xhc3NOYW1lIiwiaWNvbiIsImxhYmVsIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJhbnkiLCJ0aXRsZSIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUNNQSxjOzs7Ozs7Ozs7Ozs7O1dBVUYsa0JBQVM7QUFBQTs7QUFDTCxVQUFJLEtBQUtDLEtBQUwsQ0FBV0MsYUFBZixFQUE4QjtBQUMxQixZQUFJRCxLQUFLLEdBQUcsRUFBWjtBQUVBRSxRQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWSxLQUFLSCxLQUFqQixFQUF3QkksR0FBeEIsQ0FBNEIsVUFBQUMsR0FBRyxFQUFJO0FBQy9CLGNBQUlBLEdBQUcsS0FBSyxrQkFBUixJQUE4QkEsR0FBRyxLQUFLLE1BQXRDLElBQWdEQSxHQUFHLEtBQUssT0FBNUQsRUFBcUU7QUFDakVMLFlBQUFBLEtBQUssQ0FBQ0ssR0FBRCxDQUFMLEdBQWEsS0FBSSxDQUFDTCxLQUFMLENBQVdLLEdBQVgsQ0FBYjtBQUNIO0FBQ0osU0FKRDtBQU1BLDRCQUNJO0FBQUksVUFBQSxTQUFTLEVBQUUsY0FBYyxLQUFLTCxLQUFMLENBQVdNO0FBQXhDLHdCQUNJLCtDQUFPTixLQUFQO0FBQWMsVUFBQSxJQUFJLEVBQUUsS0FBS0EsS0FBTCxDQUFXTyxJQUEvQjtBQUFxQyxVQUFBLFNBQVMsRUFBRSx5Q0FBeUMsS0FBS1AsS0FBTCxDQUFXUTtBQUFwRyx5QkFDSTtBQUFNLFVBQUEsU0FBUyxFQUFFLEtBQUtSLEtBQUwsQ0FBV1M7QUFBNUIsVUFESixFQUVLLEtBQUtULEtBQUwsQ0FBV1UsS0FBWCxpQkFDRztBQUFNLFVBQUEsU0FBUyxFQUFDO0FBQWhCLFdBQ0ssS0FBS1YsS0FBTCxDQUFXUyxJQUFYLGlCQUNHLGtEQUZSLEVBSUssS0FBS1QsS0FBTCxDQUFXVSxLQUpoQixDQUhSLENBREosQ0FESjtBQWVILE9BeEJELE1BeUJLO0FBQ0QsNEJBQU8sNkJBQUMsaUJBQUQsRUFBYyxLQUFLVixLQUFuQixDQUFQO0FBQ0g7QUFDSjs7O1NBdENELGVBQTBCO0FBQ3RCLGFBQU87QUFDSE0sUUFBQUEsZ0JBQWdCLEVBQUUsRUFEZjtBQUVIRSxRQUFBQSxTQUFTLEVBQUUsRUFGUjtBQUdIRCxRQUFBQSxJQUFJLEVBQUUsb0JBSEg7QUFJSE4sUUFBQUEsYUFBYSxFQUFFO0FBSlosT0FBUDtBQU1IOzs7O0VBUndCVSxlQUFNQyxTOztBQTBDbkNiLGNBQWMsQ0FBQ2MsU0FBZixHQUEyQjtBQUN2QjtBQUNKO0FBQ0E7QUFDSVAsRUFBQUEsZ0JBQWdCLEVBQUVRLG1CQUFVQyxNQUpMOztBQU12QjtBQUNKO0FBQ0E7QUFDSVAsRUFBQUEsU0FBUyxFQUFFTSxtQkFBVUMsTUFURTtBQVd2QlIsRUFBQUEsSUFBSSxFQUFFTyxtQkFBVUMsTUFYTzs7QUFhdkI7QUFDSjtBQUNBO0FBQ0lOLEVBQUFBLElBQUksRUFBRUssbUJBQVVDLE1BaEJPOztBQWtCdkI7QUFDSjtBQUNBO0FBQ0lMLEVBQUFBLEtBQUssRUFBRUksbUJBQVVFLEdBckJNOztBQXVCdkI7QUFDSjtBQUNBO0FBQ0lDLEVBQUFBLEtBQUssRUFBRUgsbUJBQVVDLE1BMUJNOztBQTRCdkI7QUFDSjtBQUNBO0FBQ0lkLEVBQUFBLGFBQWEsRUFBRWEsbUJBQVVJO0FBL0JGLENBQTNCO2VBa0NlbkIsYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSBcIi4vTWVudUl0ZW1cIjtcclxuXHJcbi8qKlxyXG4gKiBAZGVwcmVjYXRlZCBUaGlzIGlzIG9ubHkgYW4gYWxpYXMgdG8gTWVudUl0ZW0sIHBsZWFzZSB1c2UgTWVudUl0ZW0gaW5zdGVhZC5cclxuICogPHNwYW4gY2xhc3M9XCJiYWRnZSBiYWRnZS13YXJuaW5nXCI+RGVwcmVjYXRlZDwvc3Bhbj4gVGhpcyBpcyBqdXN0IGFuIGFsaWFzIGZvciA8Y29kZT5NZW51SXRlbTwvY29kZT4sIHNvIHlvdSBzaG91bGQgdXNlIHRoYXQgY29tcG9uZW50IGluc3RlYWQuXHJcbiAqIElmIHlvdSBuZWVkIHRoZSBvbGRlciA8Y29kZT5BY3Rpb25NZW51SXRlbTwvY29kZT4sIG1ha2Ugc3VyZSB0byB0aGUgcHJvcCA8Y29kZT51c2VEZXByZWNhdGVkPC9jb2RlPi48YnIvPlxyXG4gKiBMaXN0IEl0ZW0gYW5kIExpbmsgZm9yIHRoZSBjdXJyZW50IEFjdGlvbiBNZW51LlxyXG4gKi9cclxuY2xhc3MgQWN0aW9uTWVudUl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIGdldCBkZWZhdWx0UHJvcHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmF2SXRlbUNsYXNzTmFtZTogXCJcIixcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICBocmVmOiBcImphdmFzY3JpcHQ6dm9pZCgwKVwiLFxyXG4gICAgICAgICAgICB1c2VEZXByZWNhdGVkOiBmYWxzZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnVzZURlcHJlY2F0ZWQpIHtcclxuICAgICAgICAgICAgbGV0IHByb3BzID0ge307XHJcblxyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnByb3BzKS5tYXAoa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChrZXkgIT09IFwibmF2SXRlbUNsYXNzTmFtZVwiICYmIGtleSAhPT0gXCJpY29uXCIgJiYga2V5ICE9PSBcImxhYmVsXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wc1trZXldID0gdGhpcy5wcm9wc1trZXldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtcIm5hdi1pdGVtIFwiICsgdGhpcy5wcm9wcy5uYXZJdGVtQ2xhc3NOYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICA8YSB7Li4ucHJvcHN9IGhyZWY9e3RoaXMucHJvcHMuaHJlZn0gY2xhc3NOYW1lPXtcIm5hdi1saW5rIGJsdWUtYXBwLWFjdGlvbnMtbWVudS1pdGVtIFwiICsgdGhpcy5wcm9wcy5jbGFzc05hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3RoaXMucHJvcHMuaWNvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMubGFiZWwgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsdWUtYXBwLWFjdGlvbnMtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5pY29uICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiZuYnNwOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxNZW51SXRlbSB7Li4udGhpcy5wcm9wc30gLz47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5BY3Rpb25NZW51SXRlbS5wcm9wVHlwZXMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIEV4dGVuZHMgY2xhc3NOYW1lIG9mIHRoZSA8Y29kZT4ubmF2LWl0ZW08L2NvZGU+IGVsZW1lbnQuXHJcbiAgICAgKi9cclxuICAgIG5hdkl0ZW1DbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFeHRlbmRzIGNsYXNzTmFtZSBvZiB0aGUgPGNvZGU+Lm5hdi1saW5rPC9jb2RlPiBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgaHJlZjogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIGNsYXNzTmFtZSBmb3IgdGhlIGljb24uXHJcbiAgICAgKi9cclxuICAgIGljb246IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMYWJlbCBmb3IgdGhlIGxpbmsuXHJcbiAgICAgKi9cclxuICAgIGxhYmVsOiBQcm9wVHlwZXMuYW55LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVG9vbHRpcCBvbiBob3Zlci5cclxuICAgICAqL1xyXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgPGNvZGU+dHJ1ZTwvY29kZT4gdG8gdXNlIHRoZSBvbGQgQWN0aW9uTWVudUl0ZW0uIE90aGVyd2lzZSB0aGlzIGNvbXBvbmVudCBpcyBqdXN0IGFuIGFsaWFzIHRvIDxjb2RlPk1lbnVJdGVtPC9jb2RlPi5cclxuICAgICAqL1xyXG4gICAgdXNlRGVwcmVjYXRlZDogUHJvcFR5cGVzLmJvb2xcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjdGlvbk1lbnVJdGVtOyJdfQ==