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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL01lbnVJdGVtLmpzIl0sIm5hbWVzIjpbIk1lbnVJdGVtIiwic3RhdGUiLCJzaG93RHJvcGRvd24iLCJhY3RpdmUiLCJjaGVja0FjdGl2ZSIsImJpbmQiLCJvbkNsaWNrIiwib25DbGlja091dHNpZGUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2UHJvcHMiLCJwcm9wcyIsInNldFN0YXRlIiwiaHJlZiIsInByZXZlbnREZWZhdWx0IiwiY2hpbGRyZW4iLCJsb2NhdGlvbiIsImhhc2giLCJVdGlsaXRpZXMiLCJzY3JvbGxUb1RvcCIsImluZGV4T2YiLCJpc0hvbWUiLCJ0YXJnZXQiLCJoYXNDbGFzcyIsImNsYXNzTmFtZSIsImlzQWN0aXZlIiwiaWNvbiIsImlkIiwiZ3VpZCIsInJlbW92ZUZyb21BdHRycyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiaW5jbHVkZXMiLCJyZXN0IiwiZWxlbWVudFR5cGUiLCJsYWJlbCIsInN1cHBvcnRPdXRzaWRlIiwiT3V0c2lkZSIsInVuZGVmaW5lZCIsImRyb3Bkb3duQ2xhc3NOYW1lIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJ0byIsIlByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiLCJhbnkiLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7SUFDTUEsUTs7Ozs7QUFDRixzQkFBYztBQUFBOztBQUFBOztBQUNWO0FBRUEsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLE1BQUFBLFlBQVksRUFBRSxLQURMO0FBRVRDLE1BQUFBLE1BQU0sRUFBRTtBQUZDLEtBQWI7QUFLQSxVQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJDLElBQWpCLCtCQUFuQjtBQUNBLFVBQUtD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O0FBQ0lsQyxFQUFBQSxJQUFJLEVBQUVpQyxtQkFBVUMsTUFUQzs7QUFXakI7QUFDSjtBQUNBO0FBQ0kxQyxFQUFBQSxPQUFPLEVBQUV5QyxtQkFBVUUsSUFkRjs7QUFnQmpCO0FBQ0o7QUFDQTtBQUNJdEIsRUFBQUEsSUFBSSxFQUFFb0IsbUJBQVVHLEdBbkJDOztBQXFCakI7QUFDSjtBQUNBO0FBQ0laLEVBQUFBLEtBQUssRUFBRVMsbUJBQVVHLEdBeEJBOztBQTBCakI7QUFDSjtBQUNBO0FBQ0l4QixFQUFBQSxRQUFRLEVBQUVxQixtQkFBVUksSUE3Qkg7O0FBK0JqQjtBQUNKO0FBQ0E7QUFDSTdCLEVBQUFBLE1BQU0sRUFBRXlCLG1CQUFVSSxJQWxDRDs7QUFvQ2pCO0FBQ0o7QUFDQTtBQUNJVCxFQUFBQSxpQkFBaUIsRUFBRUssbUJBQVVDLE1BdkNaOztBQXlDakI7QUFDSjtBQUNBO0FBQ0loQyxFQUFBQSxRQUFRLEVBQUUrQixtQkFBVUcsR0E1Q0g7O0FBOENqQjtBQUNKO0FBQ0E7QUFDSWhELEVBQUFBLFlBQVksRUFBRTZDLG1CQUFVSSxJQWpEUDs7QUFtRGpCO0FBQ0o7QUFDQTtBQUNJWixFQUFBQSxjQUFjLEVBQUVRLG1CQUFVSSxJQXREVDs7QUF3RGpCO0FBQ0o7QUFDQTtBQUNBO0FBQ0lkLEVBQUFBLFdBQVcsRUFBRVUsbUJBQVVHO0FBNUROLENBQXJCO2VBK0RlbEQsUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbmltcG9ydCBVdGlsaXRpZXMgZnJvbSBcIi4vVXRpbGl0aWVzLmpzXCI7XHJcbmltcG9ydCBDYXJldCBmcm9tIFwiLi9DYXJldFwiO1xyXG5pbXBvcnQgT3V0c2lkZSBmcm9tIFwiLi9PdXRzaWRlXCI7XHJcblxyXG4vKipcclxuICogTGlzdC1JdGVtIHVuZCBMaW5rIGbDvHIgZGllIFNpZGViYXIuXHJcbiAqL1xyXG5jbGFzcyBNZW51SXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzaG93RHJvcGRvd246IGZhbHNlLFxyXG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGVja0FjdGl2ZSA9IHRoaXMuY2hlY2tBY3RpdmUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uQ2xpY2tPdXRzaWRlID0gdGhpcy5vbkNsaWNrT3V0c2lkZS5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImhhc2hjaGFuZ2VcIiwgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrQWN0aXZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBkZWZhdWx0UHJvcHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaHJlZjogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGRyb3Bkb3duQ2xhc3NOYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICBzaG93RHJvcGRvd246IGZhbHNlLFxyXG4gICAgICAgICAgICBzdXBwb3J0T3V0c2lkZTogZmFsc2VcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuY2hlY2tBY3RpdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XHJcbiAgICAgICAgaWYgKHByZXZQcm9wcy5zaG93RHJvcGRvd24gIT09IHRoaXMucHJvcHMuc2hvd0Ryb3Bkb3duKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93RHJvcGRvd246IHRoaXMucHJvcHMuc2hvd0Ryb3Bkb3duIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5ocmVmID09PSBcIiNcIikge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25DbGljaykge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dEcm9wZG93bjogIXRoaXMuc3RhdGUuc2hvd0Ryb3Bkb3duIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gV2hlbiB1c2VyIGNsaWNrcyBhZ2FpbiBvbiBhY3RpdmUgbWVudSBpdGVtLCBzY3JvbGwgdG8gdG9wIG9mIHBhZ2VcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5ocmVmICYmIHRoaXMucHJvcHMuaHJlZiA9PT0gd2luZG93LmxvY2F0aW9uLmhhc2gpIHtcclxuICAgICAgICAgICAgVXRpbGl0aWVzLnNjcm9sbFRvVG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrQWN0aXZlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlOiAod2luZG93LmxvY2F0aW9uLmhhc2guaW5kZXhPZih0aGlzLnByb3BzLmhyZWYpID4gLTEpIHx8ICh0aGlzLnByb3BzLmlzSG9tZSAmJiAod2luZG93LmxvY2F0aW9uLmhhc2ggPT09IFwiXCIgfHwgd2luZG93LmxvY2F0aW9uLmhhc2ggPT09IFwiIy9cIikgPyB0cnVlIDogZmFsc2UpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrT3V0c2lkZSh7IHRhcmdldCB9KSB7XHJcbiAgICAgICAgLy8gRG9uJ3QgdHJpZ2dlciB3aGVuIGNsaWNraW5nIG9uIE1lbnVJdGVtXHJcbiAgICAgICAgaWYgKCFVdGlsaXRpZXMuaGFzQ2xhc3ModGFyZ2V0LCBcImJsdWUtYXBwLXNpZGViYXItZHJvcGRvd24tdG9nZ2xlXCIpICYmXHJcbiAgICAgICAgICAgICFVdGlsaXRpZXMuaGFzQ2xhc3ModGFyZ2V0LCBcImJsdWUtYXBwLXNpZGViYXItbGFiZWxcIikpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dEcm9wZG93bjogZmFsc2UgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IFwiYmx1ZS1hcHAtdG9nZ2xlLXBhZ2UgYmx1ZS1hcHAtc2lkZWJhci1idG4gYnRuXCIgK1xyXG4gICAgICAgICAgICAodGhpcy5wcm9wcy5pc0FjdGl2ZSA/IFwiIGFjdGl2ZVwiIDogXCJcIikgK1xyXG4gICAgICAgICAgICAodGhpcy5wcm9wcy5jbGFzc05hbWUgPyBcIiBcIiArIHRoaXMucHJvcHMuY2xhc3NOYW1lIDogXCJcIikgK1xyXG4gICAgICAgICAgICAodGhpcy5wcm9wcy5jaGlsZHJlbiA/IFwiIGJsdWUtYXBwLXNpZGViYXItZHJvcGRvd24tdG9nZ2xlXCIgOiBcIlwiKTtcclxuXHJcbiAgICAgICAgbGV0IGljb247XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgKHRoaXMucHJvcHMuaWNvbikgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgLy8gaXMgY2xhc3NOYW1lXHJcbiAgICAgICAgICAgIGljb24gPSA8c3BhbiBjbGFzc05hbWU9e3RoaXMucHJvcHMuaWNvbiArICh0aGlzLnByb3BzLmNoaWxkcmVuID8gXCIgYmx1ZS1hcHAtc2lkZWJhci1kcm9wZG93bi1pY29uXCIgOiBcIlwiKX0gLz47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBpcyBlbGVtZW50IC8gY29tcG9uZW50XHJcbiAgICAgICAgICAgIGljb24gPSB0aGlzLnByb3BzLmljb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcHJvcHMgPSB7XHJcbiAgICAgICAgICAgIGlkOiBcImJsdWUtYWN0aW9uLW1lbnUtaXRlbS1cIiArIFV0aWxpdGllcy5ndWlkKClcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCByZW1vdmVGcm9tQXR0cnMgPSBbXCJpc0FjdGl2ZVwiLCBcImlzSG9tZVwiLCBcImNoaWxkcmVuXCIsIFwiZHJvcGRvd25DbGFzc05hbWVcIiwgXCJzaG93RHJvcGRvd25cIiwgXCJzdXBwb3J0T3V0c2lkZVwiLCBcImVsZW1lbnRUeXBlXCJdO1xyXG5cclxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnByb3BzKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghcmVtb3ZlRnJvbUF0dHJzLmluY2x1ZGVzKGtleSkpIHtcclxuICAgICAgICAgICAgICAgIHByb3BzW2tleV0gPSB0aGlzLnByb3BzW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gSW5mbzogaHR0cHM6Ly9yZWFjdGpzLm9yZy93YXJuaW5ncy91bmtub3duLXByb3AuaHRtbFxyXG4gICAgICAgIGNvbnN0IHsgc2hvd0Ryb3Bkb3duLCAuLi5yZXN0IH0gPSBwcm9wc1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge2NyZWF0ZUVsZW1lbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5lbGVtZW50VHlwZSB8fCAodGhpcy5wcm9wcy5ocmVmID8gXCJhXCIgOiBcImJ1dHRvblwiKSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnJlc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lICsgKHRoaXMucHJvcHMuaXNBY3RpdmUgfHwgdGhpcy5zdGF0ZS5hY3RpdmUgPyBcIiBhY3RpdmVcIiA6IFwiXCIpICsgKHRoaXMucHJvcHMubGFiZWwgPyBcIiBoYXMtbGFiZWxcIiA6IFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiB0aGlzLm9uQ2xpY2tcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpY29ufSB7dGhpcy5wcm9wcy5sYWJlbCAmJiA8c3BhbiBjbGFzc05hbWU9XCJibHVlLWFwcC1zaWRlYmFyLWxhYmVsIHRleHQtdHJ1bmNhdGVcIj57dGhpcy5wcm9wcy5sYWJlbH08L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5zaG93RHJvcGRvd259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWlycm9yZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibHVlLWFwcC1zaWRlYmFyLWRyb3Bkb3duLWNhcmV0IG10LTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93RHJvcGRvd24gJiZcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVFbGVtZW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnN1cHBvcnRPdXRzaWRlID8gT3V0c2lkZSA6IFwiZGl2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2tPdXRzaWRlOiB0aGlzLnByb3BzLnN1cHBvcnRPdXRzaWRlID8gdGhpcy5vbkNsaWNrT3V0c2lkZSA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJibHVlLWFwcC1zaWRlYmFyLWRyb3Bkb3duIFwiICsgdGhpcy5wcm9wcy5kcm9wZG93bkNsYXNzTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5NZW51SXRlbS5wcm9wVHlwZXMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFNldHp0IHRvLVByb3BlcnR5IGRlciBOYXZMaW5rLUtvbXBvbmVudGUgYXVzIFJlYWN0IFJvdXRlci5cclxuICAgICAqL1xyXG4gICAgdG86IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBLYW5uIGFscyBBbHRlcm5hdGl2ZSB6dSB0byBiZW51dHp0IHdlcmRlbi5cclxuICAgICAqL1xyXG4gICAgaHJlZjogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIG9uQ2xpY2sgRXZlbnRcclxuICAgICAqL1xyXG4gICAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBLbGFzc2UgZWluZXMgSWNvbnMgb2RlciBFbGVtZW50LCB6LkIuIHZvbiBibHVlaWNvbi1jb2xvcmVkLlxyXG4gICAgICovXHJcbiAgICBpY29uOiBQcm9wVHlwZXMuYW55LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQmVzY2hyaWZ0dW5nIGRlcyBMaW5rc1xyXG4gICAgICovXHJcbiAgICBsYWJlbDogUHJvcFR5cGVzLmFueSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNvbGwgSXRlbSBhbHMgXCJha3RpdlwiIG1hcmtpZXJ0IHdlcmRlbj8gSXN0IGRpZSB0by1Qcm9wZXJ0eSBnZXNldHp0LCB3aXJkIEl0ZW0gYXV0b21hdGlzY2ggYWxzIFwiYWt0aXZcIiBtYXJraWVydCwgd2VubiBlbnRzcHJlY2hlbmRlIFNlaXRlIGFrdGl2IGlzdC5cclxuICAgICAqL1xyXG4gICAgaXNBY3RpdmU6IFByb3BUeXBlcy5ib29sLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWxzIE1lbnVJdGVtIGbDvHIgU3RhcnRzZWl0ZSBkZWtsYXJpZXJ0LlxyXG4gICAgICovXHJcbiAgICBpc0hvbWU6IFByb3BUeXBlcy5ib29sLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXJnw6RuenVuZyBkZXIgS2xhc3NlIHZvbSBEcm9wZG93bi1NZW7DvC5cclxuICAgICAqL1xyXG4gICAgZHJvcGRvd25DbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXZXJkZW4gaW4gZWluZW0gRHJvcGRvd24tTWVuw7wgYW5nZXplaWd0LlxyXG4gICAgICovXHJcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgZHJvcGRvd24gc3RhdHVzIGZyb20gb3V0c2lkZS5cclxuICAgICAqL1xyXG4gICAgc2hvd0Ryb3Bkb3duOiBQcm9wVHlwZXMuYm9vbCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIENsb3NlIG9uIGNsaWNrIG91dHNpZGUuXHJcbiAgICAgKi9cclxuICAgIHN1cHBvcnRPdXRzaWRlOiBQcm9wVHlwZXMuYm9vbCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEJ5IGRlZmF1bHQsIE1lbnVJdGVtIGlzIGEgPGNvZGU+XCJidXR0b25cIjwvY29kZT4uIElmIHlvdSBzZXQgYSA8Y29kZT5ocmVmPC9jb2RlPiwgaXQncyBhIDxjb2RlPlwiYVwiPC9jb2RlPi5cclxuICAgICAqIElmIHlvdSB3YW50IHRvIGhhdmUgaXQgYW5vdGhlciB0eXBlLCB5b3UgY2FuIHBhc3MgYSBjb21wb25lbnQgcmVmZXJlbmNlIHdpdGggdGhpcyBwcm9wIChlLmcuIDxjb2RlPkxpbms8L2NvZGU+KS5cclxuICAgICAqL1xyXG4gICAgZWxlbWVudFR5cGU6IFByb3BUeXBlcy5hbnlcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnVJdGVtOyJdfQ==