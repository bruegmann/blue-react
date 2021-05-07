"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _MenuItem = _interopRequireDefault(require("./MenuItem.js"));

var _Switch = _interopRequireDefault(require("./Switch.js"));

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
 * Switch for <strong>Actions</strong>
 */
var SwitchMenuItem = /*#__PURE__*/function (_React$Component) {
  _inherits(SwitchMenuItem, _React$Component);

  var _super = _createSuper(SwitchMenuItem);

  function SwitchMenuItem() {
    _classCallCheck(this, SwitchMenuItem);

    return _super.apply(this, arguments);
  }

  _createClass(SwitchMenuItem, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
        onClick: this.props.onChange,
        icon: /*#__PURE__*/_react.default.createElement(_Switch.default, _extends({}, this.props, {
          elementType: "span"
        })),
        label: this.props.label
      });
    }
  }]);

  return SwitchMenuItem;
}(_react.default.Component);

SwitchMenuItem.propTypes = _Switch.default.propTypes;
var _default = SwitchMenuItem;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1N3aXRjaE1lbnVJdGVtLmpzIl0sIm5hbWVzIjpbIlN3aXRjaE1lbnVJdGVtIiwicHJvcHMiLCJvbkNoYW5nZSIsImxhYmVsIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJTd2l0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUdBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtJQUNNQSxjOzs7Ozs7Ozs7Ozs7O1dBQ0Ysa0JBQVM7QUFDTCwwQkFDSSw2QkFBQyxpQkFBRDtBQUNJLFFBQUEsT0FBTyxFQUFFLEtBQUtDLEtBQUwsQ0FBV0MsUUFEeEI7QUFFSSxRQUFBLElBQUksZUFDQSw2QkFBQyxlQUFELGVBQ1EsS0FBS0QsS0FEYjtBQUVJLFVBQUEsV0FBVyxFQUFDO0FBRmhCLFdBSFI7QUFRSSxRQUFBLEtBQUssRUFBRSxLQUFLQSxLQUFMLENBQVdFO0FBUnRCLFFBREo7QUFZSDs7OztFQWR3QkMsZUFBTUMsUzs7QUFpQm5DTCxjQUFjLENBQUNNLFNBQWYsR0FBMkJDLGdCQUFPRCxTQUFsQztlQUVlTixjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSBcIi4vTWVudUl0ZW0uanNcIjtcclxuaW1wb3J0IFN3aXRjaCBmcm9tIFwiLi9Td2l0Y2guanNcIjtcclxuXHJcbi8qKlxyXG4gKiBTd2l0Y2ggZm9yIDxzdHJvbmc+QWN0aW9uczwvc3Ryb25nPlxyXG4gKi9cclxuY2xhc3MgU3dpdGNoTWVudUl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgIGljb249e1xyXG4gICAgICAgICAgICAgICAgICAgIDxTd2l0Y2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlPVwic3BhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxhYmVsPXt0aGlzLnByb3BzLmxhYmVsfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblN3aXRjaE1lbnVJdGVtLnByb3BUeXBlcyA9IFN3aXRjaC5wcm9wVHlwZXM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTd2l0Y2hNZW51SXRlbTsiXX0=