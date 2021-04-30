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
 * Shortcut for <code>&lt;button class="fluent-btn"&gt;&lt;div className="fluent-btn-ball"&gt;&lt;/div&gt;&lt;/button&gt;</code>.
 * Button with a fancy and fluent acrylic effect.
 */
var FluentBtn = /*#__PURE__*/function (_React$Component) {
  _inherits(FluentBtn, _React$Component);

  var _super = _createSuper(FluentBtn);

  function FluentBtn() {
    _classCallCheck(this, FluentBtn);

    return _super.apply(this, arguments);
  }

  _createClass(FluentBtn, [{
    key: "render",
    value: function render() {
      var _this = this;

      var ballClassName = "fluent-btn-ball";
      var props = {};
      Object.keys(this.props).forEach(function (key) {
        if (key !== "light") {
          props[key] = _this.props[key];
        }
      });
      props.className = "fluent-btn " + this.props.className + (this.props.light ? " light" : "");
      return this.props.href ? /*#__PURE__*/_react.default.createElement("a", props, /*#__PURE__*/_react.default.createElement("div", {
        className: ballClassName
      }), this.props.children) : /*#__PURE__*/_react.default.createElement("button", props, /*#__PURE__*/_react.default.createElement("div", {
        className: ballClassName
      }), this.props.children);
    }
  }], [{
    key: "defaultProps",
    get: function get() {
      return {
        className: "",
        light: false
      };
    }
  }]);

  return FluentBtn;
}(_react.default.Component);

FluentBtn.propTypes = {
  /**
   * Content of the button. You can also set all other props you would give a button or a link.
   */
  children: _propTypes.default.any,
  className: _propTypes.default.string,

  /**
   * If set, it will be an <code>&lt;a&gt;</code> element. Otherwise it will be a <code>&lt;button&gt;</code>.
   */
  href: _propTypes.default.string,

  /**
   * Can be set for buttons with white background. The glow will be a little bit darker than.
   */
  light: _propTypes.default.bool
};
var _default = FluentBtn;
exports.default = _default;