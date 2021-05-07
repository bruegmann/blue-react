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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0ZsdWVudEJ0bi5qcyJdLCJuYW1lcyI6WyJGbHVlbnRCdG4iLCJiYWxsQ2xhc3NOYW1lIiwicHJvcHMiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsImNsYXNzTmFtZSIsImxpZ2h0IiwiaHJlZiIsImNoaWxkcmVuIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhbnkiLCJzdHJpbmciLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7SUFFTUEsUzs7Ozs7Ozs7Ozs7OztXQVFGLGtCQUFTO0FBQUE7O0FBQ0wsVUFBTUMsYUFBYSxHQUFHLGlCQUF0QjtBQUVBLFVBQUlDLEtBQUssR0FBRyxFQUFaO0FBRUFDLE1BQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLEtBQUtGLEtBQWpCLEVBQXdCRyxPQUF4QixDQUFnQyxVQUFBQyxHQUFHLEVBQUk7QUFDbkMsWUFBSUEsR0FBRyxLQUFLLE9BQVosRUFBcUI7QUFDakJKLFVBQUFBLEtBQUssQ0FBQ0ksR0FBRCxDQUFMLEdBQWEsS0FBSSxDQUFDSixLQUFMLENBQVdJLEdBQVgsQ0FBYjtBQUNIO0FBQ0osT0FKRDtBQU1BSixNQUFBQSxLQUFLLENBQUNLLFNBQU4sR0FBa0IsZ0JBQWlCLEtBQUtMLEtBQUwsQ0FBV0ssU0FBNUIsSUFBMEMsS0FBS0wsS0FBTCxDQUFXTSxLQUFYLEdBQW1CLFFBQW5CLEdBQThCLEVBQXhFLENBQWxCO0FBRUEsYUFDSSxLQUFLTixLQUFMLENBQVdPLElBQVgsZ0JBQ0ksa0NBQ1FQLEtBRFIsZUFHSTtBQUFLLFFBQUEsU0FBUyxFQUFFRDtBQUFoQixRQUhKLEVBSUssS0FBS0MsS0FBTCxDQUFXUSxRQUpoQixDQURKLGdCQVFJLHVDQUNRUixLQURSLGVBR0k7QUFBSyxRQUFBLFNBQVMsRUFBRUQ7QUFBaEIsUUFISixFQUlLLEtBQUtDLEtBQUwsQ0FBV1EsUUFKaEIsQ0FUUjtBQWdCSDs7O1NBcENELGVBQTBCO0FBQ3RCLGFBQU87QUFDSEgsUUFBQUEsU0FBUyxFQUFFLEVBRFI7QUFFSEMsUUFBQUEsS0FBSyxFQUFFO0FBRkosT0FBUDtBQUlIOzs7O0VBTm1CRyxlQUFNQyxTOztBQXdDOUJaLFNBQVMsQ0FBQ2EsU0FBVixHQUFzQjtBQUNsQjtBQUNKO0FBQ0E7QUFDSUgsRUFBQUEsUUFBUSxFQUFFSSxtQkFBVUMsR0FKRjtBQU1sQlIsRUFBQUEsU0FBUyxFQUFFTyxtQkFBVUUsTUFOSDs7QUFRbEI7QUFDSjtBQUNBO0FBQ0lQLEVBQUFBLElBQUksRUFBRUssbUJBQVVFLE1BWEU7O0FBYWxCO0FBQ0o7QUFDQTtBQUNJUixFQUFBQSxLQUFLLEVBQUVNLG1CQUFVRztBQWhCQyxDQUF0QjtlQW1CZWpCLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbi8qKlxyXG4gKiBTaG9ydGN1dCBmb3IgPGNvZGU+Jmx0O2J1dHRvbiBjbGFzcz1cImZsdWVudC1idG5cIiZndDsmbHQ7ZGl2IGNsYXNzTmFtZT1cImZsdWVudC1idG4tYmFsbFwiJmd0OyZsdDsvZGl2Jmd0OyZsdDsvYnV0dG9uJmd0OzwvY29kZT4uXHJcbiAqIEJ1dHRvbiB3aXRoIGEgZmFuY3kgYW5kIGZsdWVudCBhY3J5bGljIGVmZmVjdC5cclxuICovXHJcblxyXG5jbGFzcyBGbHVlbnRCdG4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIGdldCBkZWZhdWx0UHJvcHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICBsaWdodDogZmFsc2VcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBiYWxsQ2xhc3NOYW1lID0gXCJmbHVlbnQtYnRuLWJhbGxcIjtcclxuXHJcbiAgICAgICAgbGV0IHByb3BzID0ge307XHJcblxyXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMucHJvcHMpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgaWYgKGtleSAhPT0gXCJsaWdodFwiKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wc1trZXldID0gdGhpcy5wcm9wc1trZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHByb3BzLmNsYXNzTmFtZSA9IFwiZmx1ZW50LWJ0biBcIiArICh0aGlzLnByb3BzLmNsYXNzTmFtZSkgKyAodGhpcy5wcm9wcy5saWdodCA/IFwiIGxpZ2h0XCIgOiBcIlwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5ocmVmID9cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtiYWxsQ2xhc3NOYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YmFsbENsYXNzTmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkZsdWVudEJ0bi5wcm9wVHlwZXMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIENvbnRlbnQgb2YgdGhlIGJ1dHRvbi4gWW91IGNhbiBhbHNvIHNldCBhbGwgb3RoZXIgcHJvcHMgeW91IHdvdWxkIGdpdmUgYSBidXR0b24gb3IgYSBsaW5rLlxyXG4gICAgICovXHJcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcclxuXHJcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJZiBzZXQsIGl0IHdpbGwgYmUgYW4gPGNvZGU+Jmx0O2EmZ3Q7PC9jb2RlPiBlbGVtZW50LiBPdGhlcndpc2UgaXQgd2lsbCBiZSBhIDxjb2RlPiZsdDtidXR0b24mZ3Q7PC9jb2RlPi5cclxuICAgICAqL1xyXG4gICAgaHJlZjogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbiBiZSBzZXQgZm9yIGJ1dHRvbnMgd2l0aCB3aGl0ZSBiYWNrZ3JvdW5kLiBUaGUgZ2xvdyB3aWxsIGJlIGEgbGl0dGxlIGJpdCBkYXJrZXIgdGhhbi5cclxuICAgICAqL1xyXG4gICAgbGlnaHQ6IFByb3BUeXBlcy5ib29sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGbHVlbnRCdG47Il19