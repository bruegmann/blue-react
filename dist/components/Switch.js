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
 * Switch.
 */
var Switch = /*#__PURE__*/function (_React$Component) {
  _inherits(Switch, _React$Component);

  var _super = _createSuper(Switch);

  function Switch() {
    _classCallCheck(this, Switch);

    return _super.apply(this, arguments);
  }

  _createClass(Switch, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement(this.props.elementType, {
        className: "switch " + (this.props.disabled ? "disabled " : "") + this.props.className
      }, [/*#__PURE__*/_react.default.createElement("input", {
        key: 0,
        type: "checkbox",
        checked: this.props.checked,
        onChange: this.props.onChange,
        disabled: this.props.disabled
      }), /*#__PURE__*/_react.default.createElement("span", {
        key: 1,
        className: "slider round",
        "data-label": this.props.sliderLabel
      })]);
    }
  }], [{
    key: "defaultProps",
    get: function get() {
      return {
        className: "",
        checked: false,
        onChange: function onChange() {},
        sliderLabel: null,
        elementType: "label",
        disabled: false
      };
    }
  }]);

  return Switch;
}(_react.default.Component);

Switch.propTypes = {
  className: _propTypes.default.string,
  checked: _propTypes.default.bool,
  onChange: _propTypes.default.func,

  /**
   * Sets label inside of the switch. If you set this, you should also set the className "lg" to make the switch larger.
   */
  sliderLabel: _propTypes.default.string,

  /**
   * You can change the type of the wrapper element. If you do, the <code>onChange</code> event might not be triggered.
   */
  elementType: _propTypes.default.string,
  disabled: _propTypes.default.bool
};
var _default = Switch;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1N3aXRjaC5qcyJdLCJuYW1lcyI6WyJTd2l0Y2giLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJwcm9wcyIsImVsZW1lbnRUeXBlIiwiY2xhc3NOYW1lIiwiZGlzYWJsZWQiLCJjaGVja2VkIiwib25DaGFuZ2UiLCJzbGlkZXJMYWJlbCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0lBQ01BLE07Ozs7Ozs7Ozs7Ozs7V0FZRixrQkFBUztBQUNMLDBCQUFPQyxlQUFNQyxhQUFOLENBQ0gsS0FBS0MsS0FBTCxDQUFXQyxXQURSLEVBRUg7QUFDSUMsUUFBQUEsU0FBUyxFQUFFLGFBQWEsS0FBS0YsS0FBTCxDQUFXRyxRQUFYLEdBQXNCLFdBQXRCLEdBQW9DLEVBQWpELElBQXVELEtBQUtILEtBQUwsQ0FBV0U7QUFEakYsT0FGRyxFQUlBLGNBQ0M7QUFDSSxRQUFBLEdBQUcsRUFBRSxDQURUO0FBRUksUUFBQSxJQUFJLEVBQUMsVUFGVDtBQUdJLFFBQUEsT0FBTyxFQUFFLEtBQUtGLEtBQUwsQ0FBV0ksT0FIeEI7QUFJSSxRQUFBLFFBQVEsRUFBRSxLQUFLSixLQUFMLENBQVdLLFFBSnpCO0FBS0ksUUFBQSxRQUFRLEVBQUUsS0FBS0wsS0FBTCxDQUFXRztBQUx6QixRQURELGVBUUM7QUFDSSxRQUFBLEdBQUcsRUFBRSxDQURUO0FBRUksUUFBQSxTQUFTLEVBQUMsY0FGZDtBQUdJLHNCQUFZLEtBQUtILEtBQUwsQ0FBV007QUFIM0IsUUFSRCxDQUpBLENBQVA7QUFtQkg7OztTQS9CRCxlQUEwQjtBQUN0QixhQUFPO0FBQ0hKLFFBQUFBLFNBQVMsRUFBRSxFQURSO0FBRUhFLFFBQUFBLE9BQU8sRUFBRSxLQUZOO0FBR0hDLFFBQUFBLFFBQVEsRUFBRSxvQkFBTSxDQUFHLENBSGhCO0FBSUhDLFFBQUFBLFdBQVcsRUFBRSxJQUpWO0FBS0hMLFFBQUFBLFdBQVcsRUFBRSxPQUxWO0FBTUhFLFFBQUFBLFFBQVEsRUFBRTtBQU5QLE9BQVA7QUFRSDs7OztFQVZnQkwsZUFBTVMsUzs7QUFtQzNCVixNQUFNLENBQUNXLFNBQVAsR0FBbUI7QUFDZk4sRUFBQUEsU0FBUyxFQUFFTyxtQkFBVUMsTUFETjtBQUVmTixFQUFBQSxPQUFPLEVBQUVLLG1CQUFVRSxJQUZKO0FBR2ZOLEVBQUFBLFFBQVEsRUFBRUksbUJBQVVHLElBSEw7O0FBS2Y7QUFDSjtBQUNBO0FBQ0lOLEVBQUFBLFdBQVcsRUFBRUcsbUJBQVVDLE1BUlI7O0FBVWY7QUFDSjtBQUNBO0FBQ0lULEVBQUFBLFdBQVcsRUFBRVEsbUJBQVVDLE1BYlI7QUFlZlAsRUFBQUEsUUFBUSxFQUFFTSxtQkFBVUU7QUFmTCxDQUFuQjtlQWtCZWQsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuLyoqXHJcbiAqIFN3aXRjaC5cclxuICovXHJcbmNsYXNzIFN3aXRjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgZ2V0IGRlZmF1bHRQcm9wcygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBvbkNoYW5nZTogKCkgPT4geyB9LFxyXG4gICAgICAgICAgICBzbGlkZXJMYWJlbDogbnVsbCxcclxuICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwibGFiZWxcIixcclxuICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZWxlbWVudFR5cGUsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJzd2l0Y2ggXCIgKyAodGhpcy5wcm9wcy5kaXNhYmxlZCA/IFwiZGlzYWJsZWQgXCIgOiBcIlwiKSArIHRoaXMucHJvcHMuY2xhc3NOYW1lXHJcbiAgICAgICAgICAgIH0sIFtcclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17MH1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMucHJvcHMuY2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wcm9wcy5vbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cclxuICAgICAgICAgICAgICAgIC8+LFxyXG4gICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICBrZXk9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2xpZGVyIHJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWxhYmVsPXt0aGlzLnByb3BzLnNsaWRlckxhYmVsfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblN3aXRjaC5wcm9wVHlwZXMgPSB7XHJcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBjaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgbGFiZWwgaW5zaWRlIG9mIHRoZSBzd2l0Y2guIElmIHlvdSBzZXQgdGhpcywgeW91IHNob3VsZCBhbHNvIHNldCB0aGUgY2xhc3NOYW1lIFwibGdcIiB0byBtYWtlIHRoZSBzd2l0Y2ggbGFyZ2VyLlxyXG4gICAgICovXHJcbiAgICBzbGlkZXJMYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFlvdSBjYW4gY2hhbmdlIHRoZSB0eXBlIG9mIHRoZSB3cmFwcGVyIGVsZW1lbnQuIElmIHlvdSBkbywgdGhlIDxjb2RlPm9uQ2hhbmdlPC9jb2RlPiBldmVudCBtaWdodCBub3QgYmUgdHJpZ2dlcmVkLlxyXG4gICAgICovXHJcbiAgICBlbGVtZW50VHlwZTogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2xcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN3aXRjaDsiXX0=