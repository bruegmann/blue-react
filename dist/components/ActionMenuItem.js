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