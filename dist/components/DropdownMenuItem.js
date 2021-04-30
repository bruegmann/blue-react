"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Utilities = _interopRequireDefault(require("./Utilities.js"));

var _Caret = _interopRequireDefault(require("./Caret.js"));

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
 * Dropdown-Button und Link für die Sidebar.
 */
var DropdownMenuItem = /*#__PURE__*/function (_React$Component) {
  _inherits(DropdownMenuItem, _React$Component);

  var _super = _createSuper(DropdownMenuItem);

  function DropdownMenuItem() {
    var _this;

    _classCallCheck(this, DropdownMenuItem);

    _this = _super.call(this);
    _this.state = {
      active: false,
      showDropdown: false
    };
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DropdownMenuItem, [{
    key: "handleClick",
    value: function handleClick() {
      if (this.props.children) {
        this.setState({
          showDropdown: !this.state.showDropdown
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var icon;

      if (typeof this.props.icon === "string") {
        // is className
        icon = /*#__PURE__*/_react.default.createElement("span", {
          className: this.props.icon + (this.props.children ? " blue-app-sidebar-dropdown-icon" : "")
        });
      } else {
        // is element / component
        icon = this.props.icon;
      }

      var id = {
        id: "blue-action-menu-item-" + _Utilities.default.guid()
      };
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
        className: "btn-group w-100"
      }, /*#__PURE__*/_react.default.createElement("a", _extends({}, id, {
        className: "blue-app-toggle-page blue-app-sidebar-btn btn pr-0 " + (this.state.active ? "active" : ""),
        href: this.props.to
      }), icon, /*#__PURE__*/_react.default.createElement("span", {
        className: "blue-app-sidebar-label"
      }, this.props.label)), /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        className: "btn blue-app-sidebar-btn w-auto pl-0",
        onClick: this.handleClick
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: "sr-only"
      }, "Toggle Dropdown"), /*#__PURE__*/_react.default.createElement(_Caret.default, {
        open: this.state.showDropdown,
        mirrored: true,
        className: "w-auto pl-5 mt-2"
      }))), this.state.showDropdown && /*#__PURE__*/_react.default.createElement("div", {
        className: "blue-app-sidebar-dropdown"
      }, this.props.children));
    }
  }]);

  return DropdownMenuItem;
}(_react.default.Component);

DropdownMenuItem.propTypes = {
  /**
   * Beschriftung des Links
   */
  label: _propTypes.default.any,

  /**
  * Soll Item als "aktiv" markiert werden? Ist die to-Property gesetzt, wird Item automatisch als "aktiv" markiert, wenn entsprechende Seite aktiv ist.
  */
  isActive: _propTypes.default.bool,

  /**
  * Setzt to-Property der NavLink-Komponente aus React Router.
  */
  to: _propTypes.default.string,

  /**
   * Werden in einem Dropdown-Menü angezeigt.
   */
  children: _propTypes.default.any,

  /**
   * Klasse eines Icons oder Element, z.B. von blueicon-colored.
   */
  icon: _propTypes.default.any
};
var _default = DropdownMenuItem;
exports.default = _default;