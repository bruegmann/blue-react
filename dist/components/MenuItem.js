"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Utilities = _interopRequireDefault(require("./Utilities.js"));

var _Caret = _interopRequireDefault(require("./Caret"));

var _Outside = _interopRequireDefault(require("./Outside"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
 * List-Item und Link für die Sidebar.
 */
var MenuItem = /*#__PURE__*/function (_React$Component) {
  _inherits(MenuItem, _React$Component);

  var _super = _createSuper(MenuItem);

  function MenuItem() {
    var _this;

    _classCallCheck(this, MenuItem);

    _this = _super.call(this);
    _this.state = {
      showDropdown: false,
      active: false
    };
    _this.checkActive = _this.checkActive.bind(_assertThisInitialized(_this));
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    _this.onClickOutside = _this.onClickOutside.bind(_assertThisInitialized(_this));
    window.addEventListener("hashchange", function (event) {
      _this.checkActive();
    });
    return _this;
  }

  _createClass(MenuItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.checkActive();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.showDropdown !== this.props.showDropdown) {
        this.setState({
          showDropdown: this.props.showDropdown
        });
      }
    }
  }, {
    key: "onClick",
    value: function onClick(event) {
      if (this.props.href === "#") {
        event.preventDefault();
      }

      if (this.props.onClick) {
        this.props.onClick(event);
      }

      if (this.props.children) {
        this.setState({
          showDropdown: !this.state.showDropdown
        });
      } // When user clicks again on active menu item, scroll to top of page


      if (this.props.href && this.props.href === window.location.hash) {
        _Utilities.default.scrollToTop();
      }
    }
  }, {
    key: "checkActive",
    value: function checkActive() {
      if (this.props) {
        this.setState({
          active: window.location.hash.indexOf(this.props.href) > -1 || (this.props.isHome && (window.location.hash === "" || window.location.hash === "#/") ? true : false)
        });
      }
    }
  }, {
    key: "onClickOutside",
    value: function onClickOutside(_ref) {
      var target = _ref.target;

      // Don't trigger when clicking on MenuItem
      if (!_Utilities.default.hasClass(target, "blue-app-sidebar-dropdown-toggle") && !_Utilities.default.hasClass(target, "blue-app-sidebar-label")) {
        this.setState({
          showDropdown: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var className = "blue-app-toggle-page blue-app-sidebar-btn btn" + (this.props.isActive ? " active" : "") + (this.props.className ? " " + this.props.className : "") + (this.props.children ? " blue-app-sidebar-dropdown-toggle" : "");
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

      var props = {
        id: "blue-action-menu-item-" + _Utilities.default.guid()
      };
      var removeFromAttrs = ["isActive", "isHome", "children", "dropdownClassName", "showDropdown", "supportOutside", "elementType"];
      Object.keys(this.props).forEach(function (key) {
        if (!removeFromAttrs.includes(key)) {
          props[key] = _this2.props[key];
        }
      }); // Info: https://reactjs.org/warnings/unknown-prop.html

      var showDropdown = props.showDropdown,
          rest = _objectWithoutProperties(props, ["showDropdown"]);

      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/(0, _react.createElement)(this.props.elementType || (this.props.href ? "a" : "button"), _objectSpread(_objectSpread({}, rest), {}, {
        className: className + (this.props.isActive || this.state.active ? " active" : "") + (this.props.label ? " has-label" : ""),
        onClick: this.onClick
      }), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, icon, " ", this.props.label && /*#__PURE__*/_react.default.createElement("span", {
        className: "blue-app-sidebar-label text-truncate"
      }, this.props.label), this.props.children && /*#__PURE__*/_react.default.createElement(_Caret.default, {
        open: this.state.showDropdown,
        mirrored: true,
        className: "blue-app-sidebar-dropdown-caret mt-2"
      }))), this.state.showDropdown && /*#__PURE__*/(0, _react.createElement)(this.props.supportOutside ? _Outside.default : "div", {
        onClickOutside: this.props.supportOutside ? this.onClickOutside : undefined,
        className: "blue-app-sidebar-dropdown " + this.props.dropdownClassName
      }, this.props.children));
    }
  }], [{
    key: "defaultProps",
    get: function get() {
      return {
        href: undefined,
        isActive: false,
        dropdownClassName: "",
        showDropdown: false,
        supportOutside: false
      };
    }
  }]);

  return MenuItem;
}(_react.default.Component);

MenuItem.propTypes = {
  /**
   * Setzt to-Property der NavLink-Komponente aus React Router.
   */
  to: _propTypes.default.string,

  /**
   * Kann als Alternative zu to benutzt werden.
   */
  href: _propTypes.default.string,

  /**
   * onClick Event
   */
  onClick: _propTypes.default.func,

  /**
   * Klasse eines Icons oder Element, z.B. von blueicon-colored.
   */
  icon: _propTypes.default.any,

  /**
   * Beschriftung des Links
   */
  label: _propTypes.default.any,

  /**
   * Soll Item als "aktiv" markiert werden? Ist die to-Property gesetzt, wird Item automatisch als "aktiv" markiert, wenn entsprechende Seite aktiv ist.
   */
  isActive: _propTypes.default.bool,

  /**
   * Als MenuItem für Startseite deklariert.
   */
  isHome: _propTypes.default.bool,

  /**
   * Ergänzung der Klasse vom Dropdown-Menü.
   */
  dropdownClassName: _propTypes.default.string,

  /**
   * Werden in einem Dropdown-Menü angezeigt.
   */
  children: _propTypes.default.any,

  /**
   * Defines dropdown status from outside.
   */
  showDropdown: _propTypes.default.bool,

  /**
   * Close on click outside.
   */
  supportOutside: _propTypes.default.bool,

  /**
   * By default, MenuItem is a <code>"button"</code>. If you set a <code>href</code>, it's a <code>"a"</code>.
   * If you want to have it another type, you can pass a component reference with this prop (e.g. <code>Link</code>).
   */
  elementType: _propTypes.default.any
};
var _default = MenuItem;
exports.default = _default;