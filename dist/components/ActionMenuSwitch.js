"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Switch = _interopRequireDefault(require("./Switch"));

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
 * <span class="badge badge-secondary">Deprecated</span> When using <strong>Actions</strong>, please use <strong>SwitchMenuItem</strong> instead.<br>
 * Switch for the Action Menu.
 */
var ActionMenuSwitch = /*#__PURE__*/function (_React$Component) {
  _inherits(ActionMenuSwitch, _React$Component);

  var _super = _createSuper(ActionMenuSwitch);

  function ActionMenuSwitch() {
    _classCallCheck(this, ActionMenuSwitch);

    return _super.apply(this, arguments);
  }

  _createClass(ActionMenuSwitch, [{
    key: "render",
    value: function render() {
      var _this = this;

      return /*#__PURE__*/_react.default.createElement("li", {
        className: "nav-item"
      }, /*#__PURE__*/_react.default.createElement("a", {
        href: "javascript:void(0)",
        className: "nav-link blue-app-actions-menu-item",
        onClick: function onClick() {
          console.log("click");

          _this.props.onChange();
        }
      }, /*#__PURE__*/_react.default.createElement(_Switch.default, _extends({}, this.props, {
        elementType: "span"
      })), this.props.label && /*#__PURE__*/_react.default.createElement("span", {
        className: "blue-app-actions-label"
      }, "\xA0", this.props.label)));
    }
  }], [{
    key: "defaultProps",
    get: function get() {
      return {
        className: "",
        href: "javascript:void(0)"
      };
    }
  }]);

  return ActionMenuSwitch;
}(_react.default.Component);

ActionMenuSwitch.propTypes = {
  className: _propTypes.default.string,
  checked: _propTypes.default.bool,
  onChange: _propTypes.default.func,

  /**
   * Label of the control
   */
  label: _propTypes.default.any
};
var _default = ActionMenuSwitch;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0FjdGlvbk1lbnVTd2l0Y2guanMiXSwibmFtZXMiOlsiQWN0aW9uTWVudVN3aXRjaCIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsIm9uQ2hhbmdlIiwibGFiZWwiLCJjbGFzc05hbWUiLCJocmVmIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJjaGVja2VkIiwiYm9vbCIsImZ1bmMiLCJhbnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0lBQ01BLGdCOzs7Ozs7Ozs7Ozs7O1dBUUYsa0JBQVM7QUFBQTs7QUFDTCwwQkFDSTtBQUFJLFFBQUEsU0FBUyxFQUFDO0FBQWQsc0JBQ0k7QUFDSSxRQUFBLElBQUksRUFBQyxvQkFEVDtBQUVJLFFBQUEsU0FBUyxFQUFDLHFDQUZkO0FBR0ksUUFBQSxPQUFPLEVBQUUsbUJBQU07QUFDWEMsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWjs7QUFDQSxVQUFBLEtBQUksQ0FBQ0MsS0FBTCxDQUFXQyxRQUFYO0FBQ0g7QUFOTCxzQkFRSSw2QkFBQyxlQUFELGVBQ1EsS0FBS0QsS0FEYjtBQUVJLFFBQUEsV0FBVyxFQUFDO0FBRmhCLFNBUkosRUFhSyxLQUFLQSxLQUFMLENBQVdFLEtBQVgsaUJBQ0c7QUFBTSxRQUFBLFNBQVMsRUFBQztBQUFoQixpQkFBZ0QsS0FBS0YsS0FBTCxDQUFXRSxLQUEzRCxDQWRSLENBREosQ0FESjtBQXFCSDs7O1NBN0JELGVBQTBCO0FBQ3RCLGFBQU87QUFDSEMsUUFBQUEsU0FBUyxFQUFFLEVBRFI7QUFFSEMsUUFBQUEsSUFBSSxFQUFFO0FBRkgsT0FBUDtBQUlIOzs7O0VBTjBCQyxlQUFNQyxTOztBQWlDckNULGdCQUFnQixDQUFDVSxTQUFqQixHQUE2QjtBQUN6QkosRUFBQUEsU0FBUyxFQUFFSyxtQkFBVUMsTUFESTtBQUV6QkMsRUFBQUEsT0FBTyxFQUFFRixtQkFBVUcsSUFGTTtBQUd6QlYsRUFBQUEsUUFBUSxFQUFFTyxtQkFBVUksSUFISzs7QUFLekI7QUFDSjtBQUNBO0FBQ0lWLEVBQUFBLEtBQUssRUFBRU0sbUJBQVVLO0FBUlEsQ0FBN0I7ZUFXZWhCLGdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG5pbXBvcnQgU3dpdGNoIGZyb20gXCIuL1N3aXRjaFwiO1xyXG5cclxuLyoqXHJcbiAqIDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2Utc2Vjb25kYXJ5XCI+RGVwcmVjYXRlZDwvc3Bhbj4gV2hlbiB1c2luZyA8c3Ryb25nPkFjdGlvbnM8L3N0cm9uZz4sIHBsZWFzZSB1c2UgPHN0cm9uZz5Td2l0Y2hNZW51SXRlbTwvc3Ryb25nPiBpbnN0ZWFkLjxicj5cclxuICogU3dpdGNoIGZvciB0aGUgQWN0aW9uIE1lbnUuXHJcbiAqL1xyXG5jbGFzcyBBY3Rpb25NZW51U3dpdGNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBnZXQgZGVmYXVsdFByb3BzKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJcIixcclxuICAgICAgICAgICAgaHJlZjogXCJqYXZhc2NyaXB0OnZvaWQoMClcIlxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGluayBibHVlLWFwcC1hY3Rpb25zLW1lbnUtaXRlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8U3dpdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZT1cInNwYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmxhYmVsICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsdWUtYXBwLWFjdGlvbnMtbGFiZWxcIj4mbmJzcDt7dGhpcy5wcm9wcy5sYWJlbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkFjdGlvbk1lbnVTd2l0Y2gucHJvcFR5cGVzID0ge1xyXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgY2hlY2tlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMYWJlbCBvZiB0aGUgY29udHJvbFxyXG4gICAgICovXHJcbiAgICBsYWJlbDogUHJvcFR5cGVzLmFueVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uTWVudVN3aXRjaDsiXX0=